import React from "react";
import "./Error404.css";

export const Error404 = () => {
  const returner = () => {
    document.getElementsByClassName("error404Page")[0].style.zIndex = -1;
    document.getElementsByClassName("error404Page")[0].style.opacity = 0;
  };
  return (
    <div className="error404Page">
      <div className="popupContainer">
        <h2>Weather : Error 404</h2>
        <p>City not Found .!</p>
        <button type="submit" onClick={returner}>
          OK
        </button>
      </div>
    </div>
  );
};
