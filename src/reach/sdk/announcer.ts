import { parseAddress, ReachAccount } from "@jackcom/reachduck";
import { Announcer } from "reach/build";

/** API for interacting with Announcer stream */
export function createAnnouncerAPI(acc: ReachAccount, ctcAddress: string) {
  const ctc = acc.contract(Announcer, ctcAddress);
  return {
    notifyDAOCreated(daoCtc: string) {
      return ctc.a.daoCreated(daoCtc);
    },
    notifyDAOClosed(daoCtc: string) {
      return ctc.a.daoClosed(daoCtc);
    }
  };
}

/** Create an Announcer stream */
export function createAnnouncerContract(acc: ReachAccount) {
  const ctc = acc.contract(Announcer);
  return new Promise<string | null>((resolve) =>
    ctc.participants
      .Deployer({
        done(ctc: any) {
          const announcerAddress = parseAddress(ctc).toString();
          console.log({ announcerAddress });
          resolve(announcerAddress);
        }
      })
      .catch((e: any) => {
        console.log("Announcer-deploy error", e);
        resolve(null);
      })
  );
}
