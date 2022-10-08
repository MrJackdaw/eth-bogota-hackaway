import {
  createReachAPI,
  parseAddress,
  ReachAccount,
  trimByteString
} from "@jackcom/reachduck";
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

/** Create an Announcer contract */
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

export type DAOEvent = {
  contract: string;
  name: string;
  description: string;
};

export type DAOStreamOpts = {
  ctcAddress: string;
  onDAOReceived(dao: DAOEvent): any;
};
/** Get notified when a new dao is created */
export function subscribeToDAOs(acc: ReachAccount, opts: DAOStreamOpts) {
  const { ctcAddress, onDAOReceived } = opts;
  const ctc = acc.contract(Announcer, ctcAddress);
  ctc.events.DaoCreated.monitor((e) => {
    const { what } = e;
    const [contract, name, description] = what;
    console.log({
      contract: parseAddress(contract).toString(),
      name: trimByteString(name),
      description: trimByteString(description)
    });

    onDAOReceived({
      contract: `${parseAddress(contract)}`,
      name: trimByteString(name),
      description: trimByteString(description)
    });
  });
}
