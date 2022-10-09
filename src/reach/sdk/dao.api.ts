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
  truncateString,
  ReachEvent,
  reach
} from "@jackcom/reachduck";
import { DateTime } from "luxon";
import { TalkDao } from "reach/build";
import { ProposalAction, Vote, VoteActionType } from "types/shared";
import { noOp, timeAgo } from "utils";

export type DAOInfo = {
  id: string;
  name: string;
  description: string;
  admin: string;
  fee: string;
  quorum: number;
  isMember: boolean;
  openTreasury: boolean;
};

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
    async daoInfo(): Promise<DAOInfo | null> {
      const info = fromMaybe(await Views.info());
      if (!info) return null;
      const address = reach.formatAddress(acc);
      const isMember = fromMaybe(await Views.isMember(address)) || false;
      return {
        ...info, // founder and current admin addresses
        id: daoAddress,
        name: trimByteString(info.name),
        description: trimByteString(info.description),
        admin: parseAddress(info.admin).toString(),
        fee: formatCurrency(info.fee),
        quorum: reach.bigNumberToNumber(info.quorum),
        isMember
      };
    },

    /* Methods */

    /** Create a DAO-visible post */
    async createPost(post: string) {
      const e: string = validateString(post, 128);
      if (e.length) throw new Error(e.replace("%%", "Post"));
      return DAO.post(post).catch(parseStdlibError);
    },

    /** Comment on a DAO-visible post, referenced by block timestamp */
    async commentOnPost(post: string) {
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

export type FormattedPost = {
  postId: string;
  who: string;
  text: string;
  time: number;
};
export type ListPostsOpts = {
  ctcAddress: string;
  onPostReceived(d: FormattedPost): any;
};
/** Get notified when a new post is created */
export function subscribeToPosts(acc: ReachAccount, opts: ListPostsOpts) {
  const { ctcAddress, onPostReceived = noOp } = opts;
  const ctc = acc.contract(TalkDao, ctcAddress);
  const reach = createReachAPI();
  ctc.events.posted.monitor((e) => {
    const { what, when } = e;
    const [who, text] = what;

    reach.getTimeSecs(when).then((bigSecs) => {
      return onPostReceived({
        postId: parseAddress(when).toString(),
        who: truncateString(`${parseAddress(who)}`, 4),
        text: trimByteString(text),
        time: reach.bigNumberToNumber(bigSecs)
      });
    });
  });
}

// const ms = 1000;

export type FormattedComment = {
  postId: string;
  commentId: string;
  commenter: string;
  text: string;
};
export type ListCommentsOpts = {
  ctcAddress: string;
  onCommentReceived(d: FormattedComment): any;
};
/** Get notified when a new comment is posted */
export function subscribeToComments(acc: ReachAccount, opts: ListCommentsOpts) {
  const { ctcAddress, onCommentReceived = noOp } = opts;
  const ctc = acc.contract(TalkDao, ctcAddress);
  const reach = createReachAPI();
  ctc.events.commented.monitor((e) => {
    const { what, when } = e;
    const commentId = reach.bigNumberToNumber(when).toString();
    const [who, comment, postId] = what;
    onCommentReceived({
      postId: parseAddress(postId).toString(),
      commentId,
      commenter: truncateString(`${parseAddress(who)}`, 4),
      text: trimByteString(comment)
    });
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
  const src = error?.message || error || "";
  if (src.toLowerCase().includes("user rejected transaction")) {
    return Promise.reject("Transaction was canceled");
  }
  const e = src.split("Assertion failed: ")[1];
  const m = e.split("at reach standard library:")[0];
  const trim = DaoAPIs.reduce((agg, curr) => agg.replace(`${curr}: `, ""), m);
  return Promise.reject(trim);
}
