import { useState, useMemo, useEffect } from "react";
import { PageContainer, PageTitle } from "components/Common/Containers";
import DAOItem from "components/DAOItem";
import { createDAOAPI, DAOEvent, subscribeToDAOs } from "reach/sdk";
import useGlobalUser from "hooks/GlobalUser";
import { DAO_ADDRESS, DAO_ANNOUNCER } from "utils/constants";

const ListDAOs = () => {
  const { account } = useGlobalUser();
  const [daos, setDAOs] = useState<DAOEvent[]>([]);
  const api = useMemo(
    () => (account && DAO_ADDRESS ? createDAOAPI(account, DAO_ADDRESS) : null),
    [account]
  );

  useEffect(() => {
    if (!api) return;

    subscribeToDAOs(account, {
      ctcAddress: DAO_ANNOUNCER,
      onDAOReceived(dao) {
        setDAOs([...daos, dao]);
      }
    });
  }, [api]);

  return (
    <PageContainer padded>
      <PageTitle>All DAOs</PageTitle>
      {daos.map((dao) => (
        <DAOItem key={dao.contract} {...dao} />
      ))}
    </PageContainer>
  );
};

export default ListDAOs;

