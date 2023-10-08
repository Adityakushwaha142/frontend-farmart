import "./Post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "https://fashion-blogging-aditya.herokuapp.com/images/";
  return (
    <div className="post">
      <Link to={`/show/${post.uuid}`} className="link">
        <img
          className="postImg"
          src="https://plus.unsplash.com/premium_photo-1677402408071-232d1c3c3787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
          alt=""
        />

        <div className="postInfo">
          <span className="postTitle">{post.size * 0.001} KB</span>
          <hr />
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>

        <p className="postDesc">{post.filename}</p>
      </Link>
    </div>
  );
}
