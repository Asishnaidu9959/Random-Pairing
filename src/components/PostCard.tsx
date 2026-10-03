import type { Post } from "../types";

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
      <div className="post-card-content">
        <p className="post-category">{post.tags.join(" • ")}</p>

        <h3>{post.title}</h3>

        <p className="post-excerpt">
          {post.body.length > 100
            ? `${post.body.slice(0, 100)}...`
            : post.body}
        </p>

        <p className="post-date">
          👁 {post.views} views
        </p>
      </div>
    </article>
  );
}

export default PostCard;