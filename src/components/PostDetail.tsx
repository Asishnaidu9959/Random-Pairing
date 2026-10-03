import type { Post } from "../types";

type PostDetailProps = {
  post: Post;
};

function PostDetail({ post }: PostDetailProps) {
  return (
    <article className="post-detail">
      <p className="post-category">
        {post.tags.join(" • ")}
      </p>

      <h2>{post.title}</h2>

      <p className="post-content">
        {post.body}
      </p>

      <p className="post-date">
        👁 {post.views} views
        {" • "}
        👍 {post.reactions.likes} likes
        {" • "}
        👎 {post.reactions.dislikes} dislikes
      </p>
    </article>
  );
}

export default PostDetail;