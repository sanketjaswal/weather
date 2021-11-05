import React from "react";
import "./Nav.css";
import { NavOpen } from "./NavOpen";

export const Nav = ({ onSearch, reseter, hider, unHider }) => {
  let slider = "off";

  const sideNavSlider = () => {
    if (slider === "off") {
      document.getElementById("menu").classList.remove("menuIcon1");
      document.getElementById("menu").classList.add("menuIcon2");
      document.getElementsByClassName("navOpenContainer")[0].style.bottom =
        "-58px";

      slider = "on";
    } else if (slider === "on") {
      document.getElementById("menu").classList.remove("menuIcon2");
      document.getElementById("menu").classList.add("menuIcon1");
      document.getElementsByClassName("navOpenContainer")[0].style.bottom =
        "10px";

      slider = "off";
    }
  };
  return (
    <div className="navHolder">
      <div className="navbarContainer">
        <div className="navbar">
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
      </div>
      <NavOpen reseter={reseter} hider={hider} unHider={unHider} />
    </div>
  );
};
