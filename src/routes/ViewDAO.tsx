import { useState, useMemo, useEffect } from "react";
import { useParams } from "react-router";
import {
  GridContainer,
  PageContainer,
  PageTitle
} from "components/Common/Containers";
import { WideButton } from "components/Forms/Button";
import { FormDesc } from "components/Forms/Form";
import useGlobalUser from "hooks/GlobalUser";
import { createDAOAPI } from "reach/sdk";
import { resetNotifications, updateNotification } from "state";
import styled from "styled-components";
import { LoadingView } from "components/Common/FullscreenLoader";

const Buttons = styled(GridContainer)`
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
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
    if (api && !info) loadData();
  }, [api]);

  return (
    <PageContainer padded>
      {loading && <LoadingView msg="Loading DAO info" />}
      {info && api && (
        <>
          <PageTitle>{info.name}</PageTitle>
          <FormDesc>{info.description}</FormDesc>

          <GridContainer columns="max-content auto">
            <b>Membership Fee:&nbsp;</b>
            <span>{info.fee}</span>
          </GridContainer>

          <GridContainer columns="max-content auto">
            <b>Treasury:&nbsp;</b>
            <span>{info.openTreasury ? " Open" : " Closed"}</span>
          </GridContainer>

          <h3 className="h3">Choose an Action</h3>
          <Buttons>
            {Object.keys(api).map((action) => (
              <WideButton type="button" key={action}>
                {action}
              </WideButton>
            ))}
          </Buttons>
        </>
      )}
    </PageContainer>
  );
};

export default ViewDAO;
