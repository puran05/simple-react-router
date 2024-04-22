import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Pagenotfound from "./Components/Pagenf";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </Router>
  );
}

export default App;
