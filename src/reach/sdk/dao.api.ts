/**
 * @file Helper mechanisms for interacting with a DAO
 */

import {
  ReachAccount,
  fromMaybe,
  parseAddress,
  formatCurrency,
  createReachAPI,
  trimByteString,
  truncateString
} from "@jackcom/reachduck";
import { TalkDao } from "reach/build";
import { ProposalAction, Vote, VoteActionType } from "types/shared";
import { noOp } from "utils";

/** Create an object for interacting with the DAO */
export function createDAOAPI(acc: ReachAccount, daoAddress: string) {
  const ctc = acc.contract(TalkDao, daoAddress);
  const DAO = ctc.apis;
  const Views = ctc.views;
  const reach = createReachAPI();
  const validateString = (s: string, l: number) => {
    let e: string = "";
    if (!s.length) e = "%% cannot be empty";
    if (s.length > l) e = `%% is longer than ${l} characters`;
    return e;
  };

  return {
    /* Views */
    async checkIsDaoMember(address: string) {
      return fromMaybe<boolean>(await Views.isMember(address), (a) => a, false);
    },
    async currentProposal() {
      return fromMaybe<boolean>(await Views.Proposal(), (a) => a, false);
    },
    async currentVotes(): Promise<number> {
      const votes = await Views.currentVotes();
      return fromMaybe<any>(votes, reach.bigNumberToNumber, 0);
    },
    async checkMyRank(): Promise<number> {
      return fromMaybe<any>(await Views.myRank(), reach.bigNumberToNumber, 0);
    },
    async info() {
      const info = fromMaybe(await Views.info());
      if (!info) return null;
      return {
        ...info,
        name: trimByteString(info.name),
        description: trimByteString(info.description),
        admin: parseAddress(info.admin),
        fee: formatCurrency(info.fee),
        quorum: reach.bigNumberToNumber(info.quorum)
      };
    },

    /* Methods */

    /** Create a DAO-visible post */
    async post(post: string) {
      const e: string = validateString(post, 128);
      if (e.length) throw new Error(e.replace("%%", "Post"));
      return DAO.post(post).catch(parseStdlibError);
    },

    /** Comment on a DAO-visible post, referenced by block timestamp */
    async comment(post: string) {
      const e: string = validateString(post, 128);
      if (e.length) throw new Error(e.replace("%%", "Post"));
      return DAO.comment(post).catch(parseStdlibError);
    },

    async join() {
      return DAO.join().catch(parseStdlibError);
    },

    async leave() {
      return DAO.leave(true).catch(parseStdlibError);
    },

    async registerProposal(prop: ProposalAction) {
      return DAO.registerProposal(prop).catch(parseStdlibError);
    },

    async supportProposal() {
      const act = civicDuty(true);
      return DAO.voteProposal(act).catch(parseStdlibError);
    },

    async opposeProposal() {
      const act = civicDuty(false);
      return DAO.voteProposal(act).catch(parseStdlibError);
    }
  };
}

/** Get notified when a new post is created */
export function subscribeToPosts(acc: ReachAccount, ctcAddress: string) {
  const ctc = acc.contract(TalkDao, ctcAddress);
  ctc.events.posted.monitor((e) => {
    const { what } = e;
    const [who, text] = what;
    return {
      who: truncateString(`${parseAddress(who)}`, 4),
      text: trimByteString(text)
    };
  });
}

/** Get notified when a new comment is posted */
export function subscribeToComments(acc: ReachAccount, ctcAddress: string) {
  const ctc = acc.contract(TalkDao, ctcAddress);
  const reach = createReachAPI();
  ctc.events.commented.monitor((e) => {
    const { what, when } = e;
    const postId = reach.bigNumberToNumber(when);
    const [who, text] = what;
    return {
      postId,
      commenter: truncateString(`${parseAddress(who)}`, 4),
      text: trimByteString(text)
    };
  });
}

function civicDuty(inFavor = false): Vote {
  const supports: VoteActionType = inFavor ? "For" : "Against";
  return [supports, null];
}

const DaoAPIs = [
  "addMember",
  "donate",
  "eject",
  "joinLeave",
  "registerProposal",
  "voteProposal"
];

function parseStdlibError(error: any): Promise<string> {
  const e = error.message.split("Assertion failed: ")[1];
  const m = e.split("at reach standard library:")[0];
  const trim = DaoAPIs.reduce((agg, curr) => agg.replace(`${curr}: `, ""), m);
  return Promise.reject(trim);
}
