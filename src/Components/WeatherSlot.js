import React from "react";
import "./WeatherSlot.css";

export const WeatherSlot = ({ index, info }) => {
  const cityName = info[0];
  const weather = info[1];
  const weatherExplain = info[2];
  const tempKelvin = info[3];
  const tempCelsius = Math.round(info[4]);
  const country = info[5];
  const longitute = info[6];
  const latitute = info[7];
  const iconId = info[8].slice(0, info[8].length - 1);

  let iconObject = {
    "01": "Stdaec", // Clear
    "02": "VAmWRg", // Clouds
    "03": "dgjK9i", // Partly clouds
    "04": "dgjK9i", // Scattered clouds
    "09": "rpC1Rd", // Drizzle
    10: "XkF78Y", // Rain
    11: "JA7Fsb", // ThunderStorm
    13: "WtPCZs", // Snow
    50: "kOfPKE", // Mist, Smoke
  };

  let asset;
  let iconNameId;

  if (iconId < "10") {
    asset = 4;
    console.log(iconObject[iconId]);
    iconNameId = iconObject[iconId];
  } else {
    asset = 10;
    console.log(iconObject[iconId]);
    iconNameId = iconObject[iconId];
  }

  return (
    <div className={`weatherSlotContainer ${weatherExplain}`}>
      <div className="cityNameContainer">
        <h2>{cityName}</h2>
      </div>
      {/* <h5>Weather : {weather}</h5>
      <h5>{weatherExplain}</h5>
      <h5>{tempKelvin} K</h5> */}
      <div className="celsiusContainer">
        <p>{tempCelsius}°C</p>
      </div>
      {/* <h5>{country}</h5>
      <h5>{longitute} long</h5>
      <h5>{latitute} lat</h5> */}
      {/* <h5>{iconId}</h5> */}
      <div className="weatherIconContainer">
        <div className="weatherIcon">
          <lottie-player
            className="lottiIcon"
            src={`https://assets${asset}.lottiefiles.com/temp/lf20_${iconNameId}.json`}
            mode="bounce"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
      </div>
    </div>
  );
};
