"reach 0.1";

import {
  LOW_RANK,
  MAX_MEMBERS,
  MEMBER_EXISTS,
  MEMBER_NOT_EXISTS,
  MEMBERS_ENABLED,
  PROPOSAL_ACTIVE,
  PROPOSAL_INACTIVE,
  PROPOSAL_INVALID,
  SELF_REGISTER_DISABLED,
  UNAUTHORIZED,
  VOTE_FRAUD,
  Action,
  Vote,
  OrgInfo_S,
  Proposal_S,
  calcMinRank,
  dMax,
  makeAdmin,
  makeProposal,
  validateProposal
} from "./shared.rsh";

/* Empty Proposal */
const noProposal = makeProposal(0, Action.None(), 0, 0);
/* Default null member */
const outsider = [0, 0]; // [rank: 0, lastProposalVoted: 0]

export const main = Reach.App(() => {
  const Founder = Participant("Founder", {
    announcerCtc: Contract,
    done: Fun([Contract], Null),
    name: Bytes(128),
    openTreasury: Bool,
    quorum: UInt,
    fee: UInt,
    registerSelf: Bool
  });

  // Public info
  const About = View({
    info: OrgInfo_S,
    Proposal: Action,
    currentVotes: Fun([], UInt),
    isMember: Fun([Address], Bool),
    myRank: Fun([Address], UInt)
  });
  const CreatorAPI = API({
    post: Fun([Bytes(128)], Null),
    comment: Fun([Bytes(256), Int], Null)
  });
  const Actions = API({
    addMember: Fun([Address], Null),
    eject: Fun([Address], Null),
    donate: Fun([UInt], Null),
    join: Fun([], Null),
    leave: Fun([], Null),
    registerProposal: Fun([Action], Null),
    voteProposal: Fun([Vote], Null)
  });
  const MicroBlog = Events({
    posted: [Address, Bytes(128)], // [who, post]
    commented: [Address, Bytes(256), Int] // [who, comment, target-post-timestamp]
  });
  const OrgEvents = Events({
    MotionCreated: [Action, Address],
    MotionEnacted: [UInt, Action],
    MotionRejected: [UInt, Action],
    MotionFailed: [UInt, Action],
    MemberJoined: [Address],
    MemberExited: [Address]
  });
  setOptions({ untrustworthyMaps: true, verifyArithmetic: true });
  init();

  const checkValidateQuorum = (qrm) => {
    check(qrm >= 1, "Quorum cannot be 0");
    check(qrm < UInt.max / 10, "Quorum seems worryingly large");
  };

  Founder.only(() => {
    const [name, registerSelf_, quorum_, openTreasury_, fee_, announcerCtc] =
      declassify([
        interact.name,
        interact.registerSelf,
        interact.quorum,
        interact.openTreasury,
        interact.fee,
        interact.announcerCtc
      ]);

    check(UInt.max > 1_000_000_000, "Invalid consensus state");
    checkValidateQuorum(quorum_);
  });

  Founder.publish(
    name,
    registerSelf_,
    quorum_,
    openTreasury_,
    fee_,
    announcerCtc
  );
  check(UInt.max > 1_000_000_000, "Invalid consensus state");
  checkValidateQuorum(quorum_);

  const daoID = getContract();
  const members = new Map(Tuple(UInt, UInt)); // [rank: 0, lastProposalVoted: 0]
  members[Founder] = [UInt.max, 0];

  // Announce creation and send-off Founder
  const announcer = remote(announcerCtc, {
    daoCreated: Fun([Contract], Null),
    daoClosed: Fun([Contract], Null)
  });
  announcer.daoCreated(daoID);
  Founder.interact.done(daoID);

  const getMember = (who) => fromSome(members[who], outsider);
  // Get "who"'s member rank
  const memberRank = (who) => {
    const [rank, _] = getMember(who);
    return rank;
  };
  const requireIsMember = (who, p) => {
    const minRank = calcMinRank(p.index);
    const [rank, _] = getMember(who);
    check(rank >= minRank, UNAUTHORIZED);
  };
  const addMember = (who, minRank) => {
    members[who] = [minRank, 0];
    OrgEvents.MemberJoined(who);
  };
  const removeMember = (who) => {
    delete members[who];
    OrgEvents.MemberExited(who);
  };
  // Execute an `Action`
  const doProposal = (activeProp, administrative) => {
    const { index, action, For, Against } = activeProp;
    const autoResolve = For + Against >= administrative.quorum;
    const minRank = calcMinRank(index);
    const nxProposal = { ...noProposal, index: index };
    const stillValid = validateProposal(
      action,
      administrative,
      members,
      minRank
    );

    if (autoResolve) {
      // Enact the proposal if the "For" votes have it
      const passed = For > Against;
      const shouldEnact = stillValid && passed;

      if (shouldEnact) {
        OrgEvents.MotionEnacted(index, action);

        return action.match({
          AllocateFunds: ([receiver, amt]) => {
            transfer(amt).to(receiver);
            return [nxProposal, administrative, true];
          },
          ChangeAdmin: (what) => {
            const nxAdmin = Proposal_S.toObject(what);
            const updatedAdmin = { ...administrative, ...nxAdmin };
            return [nxProposal, updatedAdmin, true];
          },
          EjectMember: (who) => {
            removeMember(who);
            return [nxProposal, administrative, true];
          },
          None: () => [nxProposal, administrative, true],
          Stop: () => {
            announcer.daoClosed(daoID);
            return [nxProposal, administrative, false];
          }
        });
      } else {
        if (passed) OrgEvents.MotionFailed(index, action);
        else OrgEvents.MotionRejected(index, action);
        return [nxProposal, administrative, true];
      }
    } else {
      return [activeProp, administrative, true];
    }
  };

  const createProposal = (currIndex, propAction, administrative) => [
    makeProposal(currIndex + 1, propAction, 0, 0),
    administrative,
    true
  ];

  // DAO is alive!
  const [proposal, admin, alive] = parallelReduce([
    noProposal,
    makeAdmin(Founder, registerSelf_, quorum_, openTreasury_, fee_),
    true
  ])
    .define(() => {
      About.info.set(
        OrgInfo_S.fromObject({
          name: name,
          founder: Founder,
          ...admin
        })
      );
      About.Proposal.set(proposal.action);
      About.currentVotes.set(() => proposal.For + proposal.Against);
      About.isMember.set((who) => isSome(members[who]));
      About.myRank.set(memberRank);
      const minRank = calcMinRank(proposal.index);
    })
    .invariant(
      proposal.For < UInt.max - proposal.Against &&
        proposal.Against < UInt.max - proposal.For &&
        balance() < UInt.max
    )
    .while(alive)

    // Add member to group
    .api_(Actions.addMember, (who) => {
      check(memberRank(who) >= minRank, LOW_RANK);
      check(isNone(members[who]), MEMBER_EXISTS);

      return [
        admin.fee,

        (k) => {
          addMember(who, minRank);
          k(null);
          return [proposal, admin, true];
        }
      ];
    })

    // Eject member (if admin; else, create proposal if there's a slot)
    .api_(Actions.donate, (amt) => {
      check(balance() < UInt.max - amt, "Donation is too generous");

      return [
        amt,

        (k) => {
          if (isSome(members[this])) {
            const [oldRank, lastVoted] = getMember(this);
            members[this] =
              oldRank < UInt.max - 1
                ? [oldRank + 1, lastVoted]
                : [dMax(oldRank, minRank), lastVoted];
          }
          k(null);
          return [proposal, admin, alive];
        }
      ];
    })

    // Eject member (if admin; else, create proposal if there's a slot)
    .api_(Actions.eject, (who) => {
      const ejectAction = Action.EjectMember(who);
      const canEject = validateProposal(ejectAction, admin, members, minRank);
      check(this !== who, "Use 'Leave' API to exit");
      check(isSome(members[who]), MEMBER_NOT_EXISTS);
      check(canEject, "Requires ChangeAdmin proposal");

      if (this !== admin.admin) {
        const { action, index } = proposal;
        check(index <= UInt.max - 1, "Proposals Limit reached");
        check(
          validateProposal(action, admin, members, minRank),
          PROPOSAL_ACTIVE
        );
      }

      return [
        (k) => {
          k(null);

          if (this == admin.admin) {
            removeMember(who);
            return [proposal, admin, alive];
          } else {
            return createProposal(proposal.index, ejectAction, admin);
          }
        }
      ];
    })

    // Self-register
    .api_(Actions.join, () => {
      check(admin.registerSelf, SELF_REGISTER_DISABLED);
      check(isNone(members[this]), MEMBER_EXISTS);
      check(admin.fee < UInt.max - balance(), MAX_MEMBERS);

      return [
        admin.fee,

        (k) => {
          k(null);
          addMember(this, minRank);
          return [proposal, admin, true];
        }
      ];
    })

    // Self-exit
    .api_(Actions.leave, () => {
      check(isSome(members[this]), MEMBER_NOT_EXISTS);
      return [
        0,

        (k) => {
          k(null);
          removeMember(this);
          return [proposal, admin, true];
        }
      ];
    })

    // Register a Governance Proposal
    .api_(Actions.registerProposal, (prop) => {
      requireIsMember(this, proposal);
      check(memberRank(this) >= minRank, LOW_RANK);
      const { action, index } = proposal;
      check(
        !validateProposal(action, admin, members, minRank),
        PROPOSAL_ACTIVE
      );

      check(index < UInt.max - 1, "Governance limit reached");
      check(validateProposal(prop, admin, members, minRank), PROPOSAL_INVALID);

      return [
        (k) => {
          k(null);
          OrgEvents.MotionCreated(prop, this);
          return createProposal(proposal.index, prop, admin);
        }
      ];
    })

    // Act on Proposal
    .api_(Actions.voteProposal, (vt) => {
      requireIsMember(this, proposal);
      const { For, Against, index, action } = proposal;
      check(
        validateProposal(action, admin, members, minRank),
        PROPOSAL_INACTIVE
      );

      if (For > 0) {
        check(For < UInt.max - Against, "Voting limit reached");
      }
      if (Against > 0) {
        check(Against < UInt.max - For, "Voting limit reached");
      }

      check(For + Against < admin.quorum, "Quorum reached");
      // check against double-voting
      const [oldRank, voted] = getMember(this);
      check(voted < index, VOTE_FRAUD);

      const [newFor, newAgainst] = vt.match({
        For: () => [For + 1, Against],
        Against: () => [For, Against + 1]
      });
      check(newFor < UInt.max - newAgainst, "Voting limit reached (2)");
      check(newAgainst < UInt.max - newFor, "Voting limit reached (2)");

      return [
        (k) => {
          k(null);
          // Bump citizen rank for participation
          members[this] =
            oldRank < UInt.max ? [oldRank + 1, index] : [oldRank, index];
          const newP = { ...proposal, For: newFor, Against: newAgainst };
          return doProposal(newP, admin);
        }
      ];
    })

    .api_(CreatorAPI.post, (post) => {
      check(isSome(members[this]), MEMBER_NOT_EXISTS);
      return [
        (k) => {
          k(null);
          MicroBlog.posted(this, post);
          return [proposal, admin, true];
        }
      ];
    })

    .api_(CreatorAPI.comment, (comment, targetBlockTime) => {
      check(isSome(members[this]), MEMBER_NOT_EXISTS);

      return [
        (k) => {
          k(null);
          MicroBlog.commented(this, comment, targetBlockTime);
          return [proposal, admin, true];
        }
      ];
    });

  transfer(balance()).to(admin.admin);
  transfer(getUntrackedFunds()).to(admin.admin);
  commit();
  exit();
});
