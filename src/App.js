import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import PostDetail from "./components/PostDetail";

import "./styles/app.css";
import { URL } from "./constants/utils";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(URL + "/posts/published", {
      method: "GET",
      headers: { "Content-Type": "Application/json" },
    })
      .then((res) => res.json())
      .then((resData) => {
        updatePosts(resData);
        updateLoading(false);
      });
  }, []);

  const updatePosts = (posts) => {
    setPosts(posts);
  };

  const updateLoading = (loading) => setLoading(loading);

  return (
    <div className="app">
      <Header>
        <h1>Blogs</h1>
      </Header>

      <Routes>
        <Route path="/" element={<Home posts={posts} isLoading={loading} />} />
        <Route path="/post/:postId" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
