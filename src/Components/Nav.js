import react from "react";
import "./Nav.css";

export const Nav = () => {
  return (
    <div className="navbarContainer">
      <div className="logo">
        <span id="sunsetLogo"></span>
        <h1>Weather</h1>
      </div>
      <div className="searchContainer">
        <input type="text" id="city" placeholder="Enter City Name"></input>
        <input type="submit" value="Search"></input>
      </div>
    </div>
  );
};
