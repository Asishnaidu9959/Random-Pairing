import type { Post } from "../data/posts";

type PostCardProps = {
  post: Post;
  onSelectPost: (post: Post) => void;
};

function PostCard({ post, onSelectPost }: PostCardProps) {
  return (
    <article onClick={() => onSelectPost(post)}>
      <img src={post.imageUrl} alt={post.title} />

      <div>
        <p>{post.category}</p>
        <h3>{post.title}</h3>
        <p>{post.date}</p>
        <p>{post.excerpt}</p>
      </div>
    </article>
  );
}

export default PostCard;