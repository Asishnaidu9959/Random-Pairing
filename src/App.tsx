import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";
import CategoryList from "./components/CategoryList";
import { posts } from "./data/posts";
import "./App.css";

type Comment = {
  id: number;
  name: string;
  text: string;
};

type CommentsByPost = {
  [postId: number]: Comment[];
};

function App() {
  const [selectedPost, setSelectedPost] = useState(posts[0]);

  const [comments, setComments] = useState<CommentsByPost>({});

  const [lastCommenter, setLastCommenter] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = Array.from(
    new Set(posts.map((post) => post.category))
  );

  const filteredPosts =
    selectedCategory === "All"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const currentComments = comments[selectedPost.id] || [];

  function handleAddComment(name: string, text: string) {
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
        : posts.filter((post) => post.category === category);

    if (categoryPosts.length > 0) {
      setSelectedPost(categoryPosts[0]);
    }
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
          <PostDetail post={selectedPost} />

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