import React from "react";
import "../src/styling/About.css";
import NavBar from "./Header.js";
import profile from '../src/images/Ashwin-Pathak.jpg';
import comm from '../src/images/Jay-shree.jpg';

const About = () => {
  return (
    <>
      <div className="container">
        <NavBar />
      </div>
      <div className="about-container">
        <p className="tittle-name">Ashwin Pathak</p>
        <div className="content-container">
          <div className="image-container">
            <img src={profile} alt="Ashwin Pathak" className="about-image" />
          </div>
          <div className="text-container">
            <p className="bio-text">
              Ashwin Pathak is a multifaceted individual known for his contributions in both the spiritual and professional realms. He serves as the head of the Jay Shree Ram Sundarkand Parivar, a spiritual organization dedicated to the recitation and dissemination of the Sundarkand, a revered chapter from the Hindu epic Ramayana. Under his guidance, the organization has organized events such as live Sundarkand recitations, providing devotees worldwide with the opportunity to participate in these spiritual gatherings.
            </p>
          </div>
        </div>
        <div>
            <p className="tittle-community"> Jay Shree Ram Sundarkand Parivar</p>
            <img src={comm} alt="Ashwin Pathak" className="community-image"/>
        </div>
        <div className="text-container">
            <p className="comm-text">
              Jay Shree Ram Sundarkand Parivar is a spiritual organization focused on the recitation and sharing of the Sundarkand, which is the fifth chapter of the Ramayana. The organization plays a significant role in organizing Sundarkand recitation events, also known as "Sundarkand Path," in various locations, including cities like Ahmedabad, Vadodara, Calgary (Canada), and Melbourne (Australia). These events allow devotees to come together for collective prayers, offering a space to strengthen their spiritual connections. The detailed schedules for these events are made available on their official website, helping participants stay informed and engaged.
            </p>
            <br></br>
            <div className="button-container">
            <a 
              href="https://jayshreeramsundarkandparivar.org/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="link-button"
            >
              Visit Jay Shree Ram Sundarkand Parivar Website
            </a>
            </div>
        </div>
      </div>
    </>
  );
};

export default About;
