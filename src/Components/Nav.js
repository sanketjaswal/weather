import React from "react";
import "./Nav.css";

export const Nav = ({ onSearch }) => {
  let slider = "off";

  const sideNavSlider = () => {
    if (slider === "off") {
      document.getElementById("menu").classList.remove("menuIcon1");
      document.getElementById("menu").classList.add("menuIcon2");
      // document.getElementsByClassName("sideNavContainer")[0].style.left = 0;
      slider = "on";
    } else if (slider === "on") {
      document.getElementById("menu").classList.remove("menuIcon2");
      document.getElementById("menu").classList.add("menuIcon1");
      // document.getElementsByClassName("sideNavContainer")[0].style.left =
      //   "-19vw";
      slider = "off";
    }
  };
  return (
    <div className="navbarContainer">
      <div className="menuContainer" onClick={sideNavSlider}>
        <span id="menu" className="menuIcon1"></span>
      </div>
      <div className="logo">
        <span id="sunsetLogo"></span>
        <h1>Weather</h1>
      </div>
      <div className="searchContainer">
        <input
          type="text"
          className="cityName"
          placeholder="Enter City Name"
        ></input>
        <input type="submit" value="Search" onClick={onSearch}></input>
      </div>
    </div>
  );
};
