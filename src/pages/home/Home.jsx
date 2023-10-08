import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";

import "./Home.css";
import { axiosInstance } from "../../config";

import { useLocation } from "react-router";

//Home Page of The Application

export default function Home() {
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const user = await JSON.parse(localStorage.getItem("user"));
      if (user) {
        const res = await axiosInstance.post("/files", {
          username: user.username,
        });
        setPosts(res.data);
      }
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
