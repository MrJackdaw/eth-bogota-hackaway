"reach 0.1";
"use strict";

/** An `Announcer` that publishes a `Contract` address */
export const main = Reach.App(() => {
  const Deployer = Participant("Deployer", { done: Fun([Contract], Null) });
  const Announcer = API({
    daoCreated: Fun([Contract], Null),
    daoClosed: Fun([Contract], Null)
  });

  const Listener = Events({
    DaoCreated: [Contract],
    DaoClosed: [Contract]
  });

  setOptions({ verifyArithmetic: true });
  init();

  Deployer.publish();
  Deployer.interact.done(getContract());

  const [alive] = parallelReduce([true])
    .invariant(balance() == 0)
    .while(alive)
    .api_(Announcer.daoCreated, (latest) => {
      return [
        (k) => {
          k(null);
          Listener.DaoCreated(latest);
          return [alive];
        }
      ];
    })
    .api_(Announcer.daoClosed, (latest) => {
      return [
        (k) => {
          k(null);
          Listener.DaoClosed(latest);
          return [alive];
        }
      ];
    })
    .timeout(false);

  commit();
  exit();
});
