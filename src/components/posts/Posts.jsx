import Post from "../post/Post";
import "./Posts.css";

export default function Posts({ posts }) {
  
  return (
    <>
      <div className="posts">
        {posts.length == 0 && (
          <span className="empty">
            You have not uploaded any file, Press the upload button above to
            share
          </span>
        )}
        {posts.map((p) => (
          <Post post={p} />
        ))}
      </div>
    </>
  );
}
