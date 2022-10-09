import { useState, useMemo, useEffect } from "react";
import { useParams } from "react-router";
import {
  GridContainer,
  PageContainer,
  PageTitle
} from "components/Common/Containers";
import { WideButton } from "components/Forms/Button";
import {
  Fields,
  Form,
  FormDesc,
  Legend,
  Textarea
} from "components/Forms/Form";
import useGlobalUser from "hooks/GlobalUser";
import { createDAOAPI, DAOInfo } from "reach/sdk";
import { resetNotifications, updateAsError, updateNotification } from "state";
import styled from "styled-components";
import { LoadingView } from "components/Common/FullscreenLoader";
import { DAOPostNotifications } from "components/DAOPostNotifications";

const PageDesc = styled(FormDesc)`
  margin-bottom: 1rem;
`;
const Buttons = styled(GridContainer)`
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const PostButton = styled(WideButton).attrs({ type: "button" })`
  margin: 0.8rem 0;
`;

const ViewDAO = () => {
  const { account } = useGlobalUser();
  const { id: viewId } = useParams<{ id: string }>();
  const api = useMemo(
    () => (account && viewId ? createDAOAPI(account, viewId) : null),
    [account]
  );
  const [daoInfo, setInfo] = useState<DAOInfo>();
  const [userPost, setUserPost] = useState<string>();
  const [loading, setLoading] = useState(false);
  const allowPost = useMemo(() => Boolean(api && userPost), [userPost]);
  const loadData = async () => {
    if (!api) return;
    setLoading(true);
    const id = resetNotifications("Loading DAO info ...", true);
    const info = await api.daoInfo();
    if (info) {
      setInfo(info);
      updateNotification(id, "DAO Loaded");
    } else updateAsError(id, "❌ Could not fetch DAO info");
    setLoading(false);
  };
  const createPost = async () => {
    if (!userPost || !api || !daoInfo) return;
    setLoading(true);
    const id = resetNotifications(`Creating ${daoInfo.name} Post`, true);
    const err = await api.createPost(userPost);
    if (err) updateAsError(id, err);
    else {
      setUserPost(undefined);
      updateNotification(id, `✅ Created Post in ${daoInfo.name}`);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (api && !daoInfo) loadData();
  }, [api]);

  return (
    <PageContainer padded>
      {loading && !daoInfo && <LoadingView msg="Loading DAO info" />}
      {daoInfo && api && (
        <>
          <PageTitle>{daoInfo.name}</PageTitle>

          <GridContainer columns="10rem auto">
            <b>Membership Fee:&nbsp;</b>
            <span>{daoInfo.fee}</span>
          </GridContainer>

          <GridContainer columns="10rem auto">
            <b>Treasury:&nbsp;</b>
            <span>{daoInfo.openTreasury ? " Open" : " Closed"}</span>
          </GridContainer>

          <PageDesc>{daoInfo.description}</PageDesc>

          {daoInfo.isMember && (
            <Form onSubmit={(e) => e.preventDefault()}>
              <Fields>
                <Legend>Post something</Legend>
                <Textarea
                  onChange={({ target }) => setUserPost(target.value)}
                  placeholder="Enter up to 128 characters"
                  maxLength={128}
                  value={userPost || ""}
                />
              </Fields>

              <PostButton
                type="button"
                disabled={loading || !allowPost}
                onClick={createPost}
              >
                Share to {daoInfo.name}
              </PostButton>
            </Form>
          )}

          <h3 className="h3">Posts</h3>
          <DAOPostNotifications ctcAddress={daoInfo.id} />

          <h3 className="h3">Choose an Action</h3>
          <Buttons>
            {Object.keys(api).map((action) => (
              <WideButton key={action}>{action}</WideButton>
            ))}
          </Buttons>
        </>
      )}
    </PageContainer>
  );
};

export default ViewDAO;
