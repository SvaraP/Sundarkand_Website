import React, { useState, useEffect } from "react";
import lotusImage from "../src/images/lotus.png";
import "../src/styling/HomePage.css";
import Footer from "./Footer.js";

const Home = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const checkIfBottom = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("scroll", checkIfBottom);
    return () => window.removeEventListener("scroll", checkIfBottom);
  }, []);

  const scheduleData = [
    { time: "5:15 PM", event: "Arrival + Dinner" },
    { time: "7:00 PM", event: "Dinner Ends" },
    { time: "7:15 PM", event: "Path Begins" },
    // { time: "8:30 PM", event: "Question Period" },
    { time: "9:00 PM", event: "Aarti" }
  ]; 

  return (
    <><div>
      {isAtBottom && <Footer />}
    </div>
    
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
            <div className="home-schedule-container">
              <div className="home-schedule-header">Event Schedule</div>
              {scheduleData.map((item, index) => (
                <div key={index} className="home-schedule-item">
                  <div className="home-schedule-time">{item.time}</div>
                  <div className="home-schedule-event">{item.event}</div>
                </div>
              ))}
            </div>

            <div className="home-link-container">
              <ul>
                <li><a href={require("../src/images/english.pdf")} target="_blank" rel="noopener noreferrer">View English PDF</a></li>
                <li><a href={require("../src/images/SundarkandGujarati.pdf")} target="_blank" rel="noopener noreferrer">View Gujarati PDF</a></li>
                <li><a href={require("../src/images/hindi.pdf")} target="_blank" rel="noopener noreferrer">View Hindi PDF</a></li>
                <li><a href={require("../src/images/invite.jpeg")} target="_blank" rel="noopener noreferrer">View Invitation</a></li>
              </ul>
            </div>
            <div className="home-instructions-container">
              <h2 className="instructions-title">Event Day Reminders</h2>
              <ul className="instructions-list">
                <li>Please arrive on time to ensure a smooth flow of events.</li>
                <li>Parking is available in the lot behind the hall.</li>
                <li>Wear traditional or respectful attire.</li>
                <li>Phones should be silenced during the path.</li>
                <li>Children are welcome under parental supervision at all times. A dedicated hall will be available to reduce disruptions, with the path remaining audible from that space.</li>
                <li>Please ensure to bring a waterbottle.</li>
                <li>Feel free to bring your own Sundarkand book from home, if you have one.</li>
                <li>If you borrow books from Sundarkand Parivar, return them to the front as you exit the hall.</li>
                
              </ul>
            </div>
          </div>
        </div>
      </div></>

  );
};

export default Home;
