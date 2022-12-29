import "./styles.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Link to="/home">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
