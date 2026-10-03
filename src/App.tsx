import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";
import CategoryList from "./components/CategoryList";
import type { Post, Comment } from "./types";
import "./App.css";


type CommentsByPost = {
  [postId: number]: Comment[];
};

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [comments, setComments] = useState<CommentsByPost>({});
  const [lastCommenter, setLastCommenter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
  fetch("https://dummyjson.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      return response.json();
    })
    .then((data) => {
      setPosts(data.posts);

      if (data.posts.length > 0) {
        setSelectedPost(data.posts[0]);
      }

      setLoading(false);
    })
    .catch(() => {
      setError("Unable to load blog posts. Please try again later.");
      setLoading(false);
    });
}, []);

  useEffect(() => {
  if (!selectedPost) return;

  if (comments[selectedPost.id]) return;

  fetch(`https://dummyjson.com/posts/${selectedPost.id}/comments`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch comments");
      }

      return response.json();
    })
    .then((data) => {
      const apiComments: Comment[] = data.comments.map(
        (comment: {
          id: number;
          body: string;
          user: {
            fullName: string;
          };
        }) => ({
          id: comment.id,
          name: comment.user.fullName,
          text: comment.body,
        })
      );

      setComments((prevComments) => ({
        ...prevComments,
        [selectedPost.id]: apiComments,
      }));
    })
    .catch((error) => {
      console.error("Unable to load comments:", error);
    });
}, [selectedPost]);


  const categories = Array.from(
  new Set(posts.flatMap((post) => post.tags))
);

  const filteredPosts =
  selectedCategory === "All"
    ? posts
    : posts.filter((post) => post.tags.includes(selectedCategory));

  const currentComments = selectedPost
    ? comments[selectedPost.id] || []
    : [];

  function handleAddComment(name: string, text: string) {
    if (!selectedPost) return;

    const newComment: Comment = {
      id: Date.now(),
      name,
      text,
    };

    setComments((prevComments) => ({
      ...prevComments,
      [selectedPost.id]: [
        ...(prevComments[selectedPost.id] || []),
        newComment,
      ],
    }));

    setLastCommenter(name);
  }

  function handleCategoryChange(category: string) {
    setSelectedCategory(category);

    const categoryPosts =
      category === "All"
        ? posts
        : posts.filter((post) => post.tags.includes(category));

    if (categoryPosts.length > 0) {
      setSelectedPost(categoryPosts[0]);
    }
  }

  if (loading) {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="status-message">
        <p>Loading posts...</p>
      </main>
    </>
  );
}

if (error) {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="status-message">
        <p>{error}</p>
      </main>
    </>
  );
}

  return (
    <>
      <Navbar />
      <Hero />

      <main className="blog-layout">
        <div className="posts-column">
          <PostList
            posts={filteredPosts}
            onSelectPost={setSelectedPost}
          />

          <CategoryList
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
          />
        </div>

        <div className="detail-column">
          {selectedPost && <PostDetail post={selectedPost} />}

          <CommentList comments={currentComments} />

          <CommentForm onAddComment={handleAddComment} />

          {lastCommenter && (
            <p className="last-commenter">
              Thanks for commenting, {lastCommenter}!
            </p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;