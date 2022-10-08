import {
  ReachAccount,
  parseCurrency,
  fromMaybe,
  parseAddress,
  formatCurrency,
  createReachAPI,
  trimByteString
} from "@jackcom/reachduck";
import { TalkDao } from "reach/build";
import { ProposalAction, Vote, VoteActionType } from "types/shared";

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
    currentVotes: Views.currentVotes,
    checkIsDaoMember: Views.isMember,
    checkMyRank: Views.myRank,
    currentProposal: Views.Proposal,

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
