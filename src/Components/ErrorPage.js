import React from "react";
import "./ErrorPage.css";

export const ErrorPage = () => {
  const returner = () => {
    document.getElementsByClassName("errorPage")[0].style.zIndex = -1;
    document.getElementsByClassName("errorPage")[0].style.opacity = 0;
  };
  return (
    <div className="errorPage">
      <div className="popupContainer">
        <h2>Weather : Error </h2>
        <p>City Already Added .!</p>
        <button type="submit" onClick={returner}>
          OK
        </button>
      </div>
    </div>
  );
};
