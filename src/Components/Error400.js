import React from "react";
import "./Error400.css";

export const Error400 = () => {
  const returner = () => {
    document.getElementsByClassName("error400Page")[0].style.zIndex = -1;
    document.getElementsByClassName("error400Page")[0].style.opacity = 0;
  };
  return (
    <div className="error400Page">
      <div className="popupContainer">
        <h2>Weather : Error 400</h2>
        <p>Enter City Name .!</p>
        <button type="submit" onClick={returner}>
          OK
        </button>
      </div>
    </div>
  );
};
