import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Intro from "./Components/Introduction/Intro.jsx";
import About from "./Components/About/About.jsx";
import Skill from "./Components/Skills/Skills.jsx";
import Contact from "./Components/Contact/contact.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Intro />
                <About />
                <Skill />
              </>
            }
          />{" "}
          <Route
            path="/Contact"
            element={
              <>
                <Navbar />
                <Contact />
              </>
            }
          />{" "}
          <Route
            path="/About"
            element={
              <>
                <Navbar />
                <About />
                <Skill />
              </>
            }
          />{" "}
        </Routes>{" "}
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
