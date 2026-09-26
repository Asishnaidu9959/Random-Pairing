import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import { posts } from "./data/posts";
import "./App.css";

function App() {
  const [selectedPost, setSelectedPost] = useState(posts[0]);

  return (
    <>
      <Navbar />
      <Hero />

      <main className="blog-layout">
        <div className="posts-column">
          <PostList
            posts={posts}
            onSelectPost={setSelectedPost}
          />
        </div>

        <div className="detail-column">
          <PostDetail post={selectedPost} />
        </div>
      </main>
    </>
  );
}

export default App;