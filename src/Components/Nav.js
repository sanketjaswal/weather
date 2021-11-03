import React from "react";
import "./Nav.css";

export const Nav = ({ onSearch }) => {
  return (
    <div className="navbarContainer">
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
