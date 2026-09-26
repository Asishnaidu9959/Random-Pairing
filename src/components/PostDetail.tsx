import type { Post } from "../data/posts";

type PostDetailProps = {
  post: Post;
};

function PostDetail({ post }: PostDetailProps) {
  return (
    <article className="post-detail">
      <img
        className="post-detail-image"
        src={post.imageUrl}
        alt={post.title}
      />

      <p className="post-category">{post.category}</p>

      <h2>{post.title}</h2>

      <p className="post-date">{post.date}</p>

      <p className="post-content">{post.content}</p>
    </article>
  );
}

export default PostDetail;