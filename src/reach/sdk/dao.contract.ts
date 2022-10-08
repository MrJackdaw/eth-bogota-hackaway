import { ReachAccount, parseAddress } from "@jackcom/reachduck";
import { TalkDao } from "reach/build";

/** DAO-create options */
export type CreateDAOOpts = {
  announcerCtc: string;
  name: string;
  openTreasury: boolean;
  quorum: number;
  fee: string;
  registerSelf: boolean;
};

/** Default DAO-create options */
const defaultOpts = {
  quorum: 3,
  fee: "0",
  registerSelf: true
};

/** Create a new micro-blogging DAO */
export async function createDAOContract(
  acc: ReachAccount,
  opts: CreateDAOOpts
) {
  return new Promise<string | null>((resolve) =>
    acc
      .contract(TalkDao)
      .participants.Founder({
        ...defaultOpts,
        ...opts,
        done(ctc: any) {
          const newDao = parseAddress(ctc).toString();
          console.log({ daoAddress: newDao });
          resolve(newDao);
        }
      })
      .catch((e: any) => {
        console.log("CreateDAO error", e);
        return null;
      })
  );
}
