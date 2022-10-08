import { useState, useEffect } from "react";
import { PageContainer, PageTitle } from "components/Common/Containers";
import DAOItem from "components/DAOItem";
import { DAOEvent } from "reach/sdk";
import useGlobalUser from "hooks/GlobalUser";
import { LoadingView } from "components/Common/FullscreenLoader";
import Daos from "state/daos";

const loadingMsgs = [
  "Loading DAOs",
  "Wrangling blocks",
  "Lifting blockchain cushions"
];
const msgsCount = loadingMsgs.length;

const ListDAOs = () => {
  // index of random loading message
  const i = Math.round(Math.random() * (msgsCount - 1));
  const { account } = useGlobalUser();
  const { daos: list } = Daos.getState();
  const [daosList, setDAOs] = useState<DAOEvent[]>(list);
  const unsubscribe = () => {
    Daos.subscribeToKeys(
      ({ daos }) => Array.isArray(daos) && setDAOs(daos),
      ["daos"]
    );
  };

  useEffect(() => unsubscribe, [account]);

  return (
    <PageContainer padded>
      <PageTitle>All DAOs</PageTitle>
      {!daosList.length && <LoadingView msg={loadingMsgs[i]} />}

      {daosList.map((dao) => (
        <DAOItem key={dao.contract} {...dao} />
      ))}
    </PageContainer>
  );
};

export default ListDAOs;
