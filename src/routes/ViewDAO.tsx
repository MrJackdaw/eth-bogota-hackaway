import { useState, useMemo, useEffect } from "react";
import { PageContainer } from "components/Common/Containers";
import { createDAOAPI } from "reach/sdk";
import useGlobalUser from "hooks/GlobalUser";
import { DAO_ADDRESS } from "utils/constants";
import { FormDesc } from "components/Forms/Form";

const ViewDAO = () => {
  const { account } = useGlobalUser();
  const api = useMemo(
    () => (account && DAO_ADDRESS ? createDAOAPI(account, DAO_ADDRESS) : null),
    [account]
  );
  const [info, setInfo] = useState<any>();
  const [loading, setLoading] = useState(false);
  const loadData = async () => {
    if (!api) return;
    setLoading(true);
    setInfo(await api.info());
    setLoading(false);
  };

  useEffect(() => {
    if (api) loadData();
  }, [api]);

  return (
    <PageContainer padded>
      {loading && (
        <pre>
          <code>Loading info ...</code>
        </pre>
      )}
      {info && (
        <>
          <h1 className="h2">{info.name}</h1>
          <FormDesc>{info.description}</FormDesc>
        </>
      )}
    </PageContainer>
  );
};

export default ViewDAO;
