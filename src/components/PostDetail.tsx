import type { Post } from "../data/posts";

type PostDetailProps = {
  post: Post;
};

function PostDetail({ post }: PostDetailProps) {
  return (
    <article>
      <img src={post.imageUrl} alt={post.title} />

      <p>{post.category}</p>

      <h2>{post.title}</h2>

      <p>{post.date}</p>

      <p>{post.content}</p>
    </article>
  );
}

export default PostDetail;