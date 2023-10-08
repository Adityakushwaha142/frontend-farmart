import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://fashion-blogging-aditya.herokuapp.com/images/";
  const dummy =
    "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem1">
            <Link className="link" to="/upload">
              UPLOAD
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
