import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import { posts } from "./data/posts";

function App() {
  const [selectedPost, setSelectedPost] = useState(posts[0]);

  return (
    <>
      <Navbar />
      <Hero />

      <PostList
        posts={posts}
        onSelectPost={setSelectedPost}
      />

      <PostDetail post={selectedPost} />
    </>
  );
}

export default App;