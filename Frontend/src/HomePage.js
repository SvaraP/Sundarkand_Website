
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";  // Import Routes and Route
import lotusImage from "../src/images/lotus.png";
// import invite from "../src/images/invite.jpeg";

import "../src/styling/HomePage.css";
import NavBar from "./Header.js";
import About from "./About";  // Import About Page
import Footer from "./Footer.js";

const HomePage = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Function to check if we're at the bottom of the page
  const checkIfBottom = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

    const scheduleData = [
      { time: "6:00 PM", event: "Arrival" },
      { time: "6:30 PM", event: "Dinner" },
      { time: "7:30 PM", event: "Path Begins" },
      { time: "8:30 PM", event: "Question Period" },
      { time: "9:00 PM", event: "Goodbyes" }
    ]; 

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener("scroll", checkIfBottom);
    return () => {
      window.removeEventListener("scroll", checkIfBottom); // Cleanup the event listener
    };
  }, []);

  return (
    <>
      <NavBar />
      <Routes> {/* This handles routing */}
        <Route
          path="/"
          element={
            <>
<div className="home-container">

              <div className="back-section" style={{ backgroundImage: `url(${lotusImage})` }}>
                <div className="back-content">
                  <p className="home-name">Sundarkand Path</p>
                  <p className="text_colour">Scroll up to explore more</p>
                </div>
              </div>

              <div className="content-section">


                <h2 className="title-name-home">Schedule</h2>
                <div className="hcontent-container">
  {/* Event Schedule Section */}
  <div className="home-schedule-container">
    <div className="home-schedule-header">Event Schedule</div>
    {scheduleData.map((item, index) => (
      <div key={index} className="home-schedule-item">
        <div className="home-schedule-time">{item.time}</div>
        <div className="home-schedule-event">{item.event}</div>
      </div>
    ))}
  </div>

  {/* Links Section */}
  <div className="home-link-container">
    <ul>
      <li><a href={require("../src/images/english.pdf")} target="_blank" rel="noopener noreferrer">View English PDF</a></li>
      <li><a href={require("../src/images/SundarkandGujarati.pdf")} target="_blank" rel="noopener noreferrer">View Gujarati PDF</a></li>
      <li><a href={require("../src/images/hindi.pdf")} target="_blank" rel="noopener noreferrer">View Hindi PDF</a></li>
      <li><a href={require("../src/images/invite.jpeg")} target="_blank" rel="noopener noreferrer">View Invitation</a></li>
    </ul>
  </div>
</div>
              </div>

        </div>




              {/* footer */}
              {isAtBottom && <Footer />}
            </>
          }
        />
        
        <Route path="/about" element={<About />} />  {/* About Route */}
      </Routes>
    </>
  );
};

export default HomePage;
