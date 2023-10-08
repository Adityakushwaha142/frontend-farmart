import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles" style={{ marginBottom: "5px" }}>
        <span style={{ fontSize: "50px" }} className="headerTitleSm">
          WE TRANSFER
        </span>
      </div>

      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1582134534564-76ae09c71e3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80"
        alt=""
      />
      <div className="count">
        <h2>{`My Files `}</h2>
      </div>
    </div>
  );
}
