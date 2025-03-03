import React from "react";

import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar";
import Projects from "./Projects";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-900 bg-cover bg-center min-h-screen flex flex-col items-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
