import type { Post } from "../data/posts";
import PostCard from "./PostCard";

type PostListProps = {
  posts: Post[];
  onSelectPost: (post: Post) => void;
};

function PostList({ posts, onSelectPost }: PostListProps) {
  return (
    <section>
      <h2>Recent Posts</h2>

      <div>
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