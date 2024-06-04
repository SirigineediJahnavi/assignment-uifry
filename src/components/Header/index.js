// src/components/Header.js
import React from 'react';
import './index.css'

const Header = () => {
  return (
    <div className="header">
      <div className="completeheader">
      <div className="headerrow">
      <img src="Frame.png" alt="logo" className="logo"/>
        <h1 className="heading">
          uifry
          <sup className="supTM">
            Tm
          </sup>
        </h1>
        <div className="paras">
        <p className="home">
          Home
        </p>
        <p className="eachcontent">
          About Us
        </p>
        <p className="eachcontent">
          Pricing 
        </p>
        <p className="eachcontent">
          Features
        </p>
        </div>
      </div>
      <button className="download">
        Download
      </button>
      <img src="Star 1.png" alt="star" className="star"/>
      </div>
      <div className="secondhalf">
        <div>
        <h1 className="decisionheading">
        Make The Best Financial Decisions        </h1>
        <p className="decisionpara">
        Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
        <div className="Startbuttons">
          <button className="starteachbutton">
            Get Started
            <img src="arrow.png" alt="arrow" className="startarrow"/>
          </button>
          <div className="playbutton">
            <img src="Group 3.png" alt="play" className="playimage"/>
            <h1 className="watchVideo">
              Watch video
            </h1>
          </div>
        </div>
        <div>
          <img src="triangle.png" alt='triangle' className="traingle"/>
        </div>
        </div>
        <img src="mobiles.jpg" alt="mobiles" className="mobiles"/>
      </div>
      
    </div>
  );
};

export default Header;
