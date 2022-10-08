"reach 0.1";

export const UNAUTHORIZED = "THIEF! SEIZE THEM!";
export const MAX_MEMBERS = "Membership is at maximum capacity";
export const MEMBERS_ENABLED = "Members Module is already enabled";
export const PROPOSAL_ACTIVE = "A Proposal is already active.";
export const PROPOSAL_INACTIVE = "No Proposal is currently active";
export const PROPOSAL_INVALID = "Bad suggestion is bad. Apologize to everyone.";
export const SELF_REGISTER_DISABLED =
  "An existing user has to add you to this DAO";
export const LOW_RANK = "User is below Citizen Rank threshold";
export const MEMBER_EXISTS = "Address is already a member";
export const MEMBER_NOT_EXISTS = "Address is not a member";
export const VOTE_FRAUD = "Address has already voted in this session";

/** Info about a governance `Proposal` */
export const Proposal_S = Struct([
  ["admin", Address],
  ["registerSelf", Bool],
  ["fee", UInt],
  ["quorum", UInt],
  ["openTreasury", Bool]
]);

/** Governance `Proposals` that can be enacted by DAO */
export const Action = Data({
  AllocateFunds: Tuple(Address, UInt),
  ChangeAdmin: Proposal_S,
  EjectMember: Address,
  None: Null,
  Stop: Null
});

/** Governance `Proposals` that can be enacted by DAO */
export const Vote = Data({
  Against: Null,
  For: Null
});

/** DAO public info */
export const OrgInfo_S = Struct([
  ["name", Bytes(128)],
  ["founder", Address],
  ["admin", Address],
  ["fee", UInt],
  ["registerSelf", Bool],
  ["quorum", UInt],
  ["openTreasury", Bool]
]);

export const calcMinRank = (index) =>
  index >= 10 ? (index - (index % 10)) / 10 : 1;

export const dMax = (a, b) => (a >= b ? a : b);

/** Create a governance `Proposal`  */
export const makeProposal = (index, act, vFor, vAgainst) => ({
  index: index,
  action: act,
  For: vFor,
  Against: vAgainst
});

/** Update `Administrative` information about org  */
export const makeAdmin = (admin, registerSelf, quorum, openTreasury, fee) => ({
  admin,
  registerSelf,
  quorum,
  openTreasury,
  fee
});

/** Validate a `Proposal` action in context */
export const validateProposal = (proposal, admin, members, minRank) => {
  return proposal.match({
    AllocateFunds: ([who, amt]) => {
      const reasonable = amt < balance();
      const memberRequest = isSome(members[who]) && reasonable;
      return admin.openTreasury ? reasonable : memberRequest;
    },
    // Require valid new admin and new quorum (if changing)
    ChangeAdmin: (pxAdmin) => {
      const px = Proposal_S.toObject(pxAdmin);
      const [rank, _] = fromSome(members[px.admin], [0, 0]);
      const validAdmin = isSome(members[px.admin]) && rank > minRank;
      const validQ = px.quorum > 0 && px.quorum < UInt.max / 10;
      const validFee = px.fee >= 0 && px.fee < UInt.max;
      return validAdmin && validQ && validFee;
    },
    EjectMember: (who) => {
      const isMember = isSome(members[who]);
      return isMember && who !== admin.admin;
    },
    None: () => false,
    Stop: () => true
  });
};
