import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Single from "./pages/single/Single";
import Upload from "./pages/upload/Upload";

function App() {
  const { user } = useContext(Context);

  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/upload" element={user ? <Upload /> : <Register />} />
        <Route path="/show/:fileId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
