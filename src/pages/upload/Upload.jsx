import { useContext, useState } from "react";
import "./Upload.css";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [press, setPress] = useState(false);
  const { user } = useContext(Context);

  const handleClick = (e) => {
    setFile(e.target.files[0]);
    setTitle(e.target.files[0].name);
  };

  const handleSubmit = async (e) => {
    const user = JSON.parse(localStorage.getItem("user"));
    e.preventDefault();

    if (file) {
      const data = new FormData();
      data.append("myfile", file);
      data.append("username", user.username);

      try {
        const res = await axiosInstance.post("/files/upload", data);
        setDesc(res.data.file);
        setPress(true);
      } catch (err) {}
    }
  };

  return (
    <div className="write">
      {file && (
        <img
          className="writeImg"
          src="https://plus.unsplash.com/premium_photo-1677402408071-232d1c3c3787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80"
          alt=""
        />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            name="myfile"
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => handleClick(e)}
          />
          {title.length == 0 ? (
            <span className="writeSpan">Click Me</span>
          ) : (
            <span className="writeSpan">{title}</span>
          )}
        </div>

        <div className="writeFormGroup">
          {desc.length == 0 ? (
            <span>Press Upload Button to Generate Link</span>
          ) : (
            <>
              <span>{`Link : ${desc}`}</span>
            </>
          )}
        </div>

        <button disabled={press} className="writeSubmit" type="submit">
          {press ? "File Uploaded" : "Upload"}
        </button>
      </form>
    </div>
  );
}
