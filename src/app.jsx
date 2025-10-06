import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ScrollDemo from "./pages/ScrollDemo";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/ScrollDemo">Scroll Demo</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ScrollDemo" element={<ScrollDemo />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
