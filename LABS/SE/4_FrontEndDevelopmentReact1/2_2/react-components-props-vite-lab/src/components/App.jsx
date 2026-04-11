import React from "react";

// Import the children components
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

// Get the blog 
import blogData from "../data/blog";

// Console log to troubleshoot
console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
