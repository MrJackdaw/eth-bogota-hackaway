import { useState, useMemo, useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { PageContainer } from "components/Common/Containers";
import { WideButton } from "components/Forms/Button";
import { FormDesc } from "components/Forms/Form";
import useGlobalUser from "hooks/GlobalUser";
import { createDAOAPI } from "reach/sdk";
import { resetNotifications, updateNotification } from "state";

const Pre = styled.pre`
  overflow-x: auto;
  width: 100%;
`;

const ViewDAO = () => {
  const { account } = useGlobalUser();
  const { id: viewId } = useParams<{ id: string }>();
  const api = useMemo(
    () => (account && viewId ? createDAOAPI(account, viewId) : null),
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
