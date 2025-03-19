import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Header";
import Home from "./HomePage";
import About from "./About";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Home />} />

        {/* Other routes */}
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
