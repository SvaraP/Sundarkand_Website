import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import NavBar from "./Header";
import Home from "./HomePage";
import About from "./About";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
