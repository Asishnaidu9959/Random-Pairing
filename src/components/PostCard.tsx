import type { Post } from "../data/posts";

type PostCardProps = {
  post: Post;
  onSelectPost: (post: Post) => void;
};

function PostCard({ post, onSelectPost }: PostCardProps) {
  return (
    <article
      className="post-card"
      onClick={() => onSelectPost(post)}
    >
      <img
        className="post-card-image"
        src={post.imageUrl}
        alt={post.title}
      />

      <div className="post-card-content">
        <p className="post-category">{post.category}</p>
        <h3>{post.title}</h3>
        <p className="post-date">{post.date}</p>
        <p className="post-excerpt">{post.excerpt}</p>
      </div>
    </article>
  );
}

export default PostCard;