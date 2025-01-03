import React from "react";
import "./Hero.css";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div className="hero-hand-icon">
          <p>New</p>
          <img src={hand_icon} alt="handicon" />
        </div>
        <p>Collection</p>
        <p>For Everyone</p>
      <div className="hero-latest-btn">
          <button>Latest Collection
        <img src={arrow_icon} alt="arrow-icon" />
          </button>
      </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="hero-image" />
      </div>
    </div>
  );
};

export default Hero;
