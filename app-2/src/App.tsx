import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

function Home() {
  return <div>URL atual: /</div>;
}

function About() {
  return <div>URL atual: /about</div>;
}

function Contact() {
  return <div>URL atual: /contact</div>;
}

function App() {
  return (
    <Router>
      <h4>APP 2</h4>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
