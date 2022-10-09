import sortby from "lodash.sortby";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { FormattedPost, subscribeToPosts } from "reach/sdk";
import useGlobalUser from "hooks/GlobalUser";
import { FormDesc } from "./Forms/Form";
import { GridContainer } from "./Common/Containers";
import { timeAgo } from "utils";
import Posts, { addPost } from "state/posts";

export type DAOPostAlertsProps = { ctcAddress: string };

const Container = styled.section.attrs({ className: "DaoPosts" })`
  margin: 0.4em 0;
`;
const Timestamp = styled(FormDesc).attrs({ className: "DaoPostDate" })`
  font-style: italic;
  text-align: right;
`;
const Author = styled(FormDesc).attrs({ className: "DaoPostAuthor" })`
  font-weight: bold;
`;
const Text = styled.p.attrs({ className: "DaoPostText" })`
  color: #fefefe;
`;
const ListItem = styled.div.attrs({ className: "DaoPostItem" })`
  border: 1px solid ${({ theme }) => theme.colors.semitransparent};
  border-radius: 8px;
  margin-bottom: 0.8rem;
  padding: 0.8rem;
`;

/** All `Posts` received from a DAO subscription */
export const DAOPostNotifications = styled((props: DAOPostAlertsProps) => {
  const { account } = useGlobalUser();
  const [posts, setPosts] = useState<FormattedPost[]>([]);
  const { ctcAddress } = props;
  useEffect(() => {
    subscribeToPosts(account, {
      ctcAddress,
      onPostReceived: (post) => {
        addPost(post);
        const { posts: updated } = Posts.getState();
        setPosts(sortby([...updated], "time").reverse());
      }
    });
  }, []);

  return (
    <Container>
      {posts.map((p) => (
        <ListItem key={p.postId}>
          <GridContainer columns="repeat(2,1fr)">
            <Author>{p.who}</Author>
            <Timestamp>{timeAgo(p.time)}</Timestamp>
          </GridContainer>

          <Text>{p.text}</Text>
        </ListItem>
      ))}
    </Container>
  );
})``;

export default DAOPostNotifications;
