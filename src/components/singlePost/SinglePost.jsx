import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";
import "./SinglePost.css";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    const getPost = async () => {
      const res = await axiosInstance.get("/files/show/" + path);
      setPost(res.data);
      setTitle(res.data.fileName);
      setDesc(res.data.downloadLink);
    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      const res = await axiosInstance.delete(`/files/delete/${post.uuid}`);
      window.location.replace("/");
    } catch (err) {}
  };

  const handleDownload = async () => {
    const data = await axiosInstance.get(`/download/${post.uuid}`);
    const blob = new Blob([data.data], { type: "application/jpg" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `${post.fileName}`;
    link.click();
    window.URL.revokeObjectURL(link.href);
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://plus.unsplash.com/premium_photo-1677402408071-232d1c3c3787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
          alt=""
          className="singlePostImg"
        />

        <h1 className="singlePostTitle">
          {title}

          {post.fileName != "Expired" && (
            <div className="singlePostEdit">
              <i
                className="singlePostIcon far fa-trash-alt"
                onClick={handleDelete}
              ></i>
              <span className="link">Delete</span>
            </div>
          )}
        </h1>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>

        <textarea
          className="singlePostDescInput"
          value={` Link: ${desc}`}
          onChange={(e) => setDesc(e.target.value)}
        />
        {post.fileName != "Expired" && (
          <button className="singlePostButton" onClick={handleDownload}>
            Download
          </button>
        )}
      </div>
    </div>
  );
}
