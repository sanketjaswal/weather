import React from "react";
import "./WeatherSlot.css";

export const WeatherSlot = ({ key, city, index }) => {
  return (
    <div className="weatherSlotContainer">
      <h1>{city}</h1>
      {/* <h5>{country}</h5> */}
      <div className="weatherIcon"></div>
    </div>
  );
};
