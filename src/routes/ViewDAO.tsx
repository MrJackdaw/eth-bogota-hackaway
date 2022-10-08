import { useState, useMemo, useEffect } from "react";
import { PageContainer } from "components/Common/Containers";
import { createDAOAPI } from "reach/sdk";
import useGlobalUser from "hooks/GlobalUser";
import { DAO_ADDRESS } from "utils/constants";
import { FormDesc } from "components/Forms/Form";
import { resetNotifications, updateNotification } from "state";
import { WideButton } from "components/Forms/Button";
import styled from "styled-components";

const Pre = styled.pre`
  overflow-x: auto;
  width: 100%;
`;

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
    const id = resetNotifications("Loading DAO info ...", true);
    setInfo(await api.info());
    updateNotification(id, "DAO Loaded");
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
      {info && api && (
        <>
          <h1 className="h2">{info.name}</h1>
          <FormDesc>{info.description}</FormDesc>
          <Pre>
            <code>{JSON.stringify(info, null, 3)}</code>
          </Pre>
          {Object.keys(api).map((action) => (
            <WideButton type="button" key={action}>
              {action}
            </WideButton>
          ))}
        </>
      )}
    </PageContainer>
  );
};

export default ViewDAO;
