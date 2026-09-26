function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Our Blog</h1>

      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#posts">Posts</a>
        <a href="#categories">Categories</a>
      </div>
    </nav>
  );
}

export default Navbar;