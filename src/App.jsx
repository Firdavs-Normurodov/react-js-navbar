import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Added Routes
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Blog from "./components/Blog";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <main>
          <div id="home">
            <Home />
          </div>

          <div id="about">
            <About />
          </div>
          <div id="blog">
            <Blog />
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
