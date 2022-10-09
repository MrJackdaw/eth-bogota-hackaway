import createState from "@jackcom/raphsducks";
import { FormattedPost } from "reach/sdk";

/** Global State for storing DAO stuff */
const Posts = createState({
  posts: [] as FormattedPost[]
});

export default Posts;

/** Add a `Post` to globally-accessible state  */
export function addPost(post: FormattedPost) {
  const { posts } = Posts.getState();
  const newPosts = [...posts];
  const i = posts.findIndex((d) => d.postId === post.postId);
  if (i > -1) newPosts[i] = post;
  else newPosts.push(post);
  Posts.posts(newPosts);
}

/** Remove a `Post` from globally-accessible state  */
export function removePost(id: string) {
  const { posts } = Posts.getState();
  const i = posts.findIndex((d) => d.postId === id);
  if (i === -1) return;
  const newPosts = [...posts];
  newPosts.splice(i, 1);
  Posts.posts(newPosts);
}
