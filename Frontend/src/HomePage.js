import React from "react";
import "../src/styling/HomePage.css";
import NavBar from "./Header.js";

const HomePage = () => {
  return (
    <>
    <div className="container">
      <NavBar />
    </div>
    <p></p>
    <div className="homepage-container">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Sundarkand</h1>
        <p className="text-lg text-gray-700 max-w-2xl text-center">
          Sundarkand is a significant chapter from the Ramayana, primarily focused on the heroic deeds of Lord Hanuman.
          It highlights themes of devotion, courage, and faith. Many Hindus recite Sundarkand to seek blessings and overcome obstacles in life.
        </p>
        <div className="mt-6">
          <a
            href="/about"
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
          >
            Learn More
          </a>
        </div>
      </div></>
  );
};

export default HomePage;
