import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import PostDetail from "./components/PostDetail";

import "./styles/app.css";
import { URL } from "./constants/utils";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(URL + "/posts/published", {
      method: "GET",
      headers: { "Content-Type": "Application/json" },
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        updatePosts(resData);
      });
  }, []);

  const updatePosts = (posts) => {
    setPosts(posts);
  };

  return (
    <div className="app">
      <Header>
        <h1>Blogs</h1>
      </Header>

      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/post/:postId" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
