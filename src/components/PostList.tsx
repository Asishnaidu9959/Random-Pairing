import type { Post } from "../types";
import PostCard from "./PostCard";

type PostListProps = {
  posts: Post[];
  onSelectPost: (post: Post) => void;
};

function PostList({ posts, onSelectPost }: PostListProps) {
  return (
    <section className="post-list" id="posts">
      <h2>Recent Posts</h2>

      <div className="post-list-items">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onSelectPost={onSelectPost}
          />
        ))}
      </div>
    </section>
  );
}

export default PostList;