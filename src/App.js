import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <nav>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/about">About </Link>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
