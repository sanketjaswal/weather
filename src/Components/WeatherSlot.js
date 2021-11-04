import React from "react";
import "./WeatherSlot.css";

export const WeatherSlot = ({ index, info }) => {
  const cityName = info[0];
  const weather = info[1];
  const weatherExplain = info[2];
  const tempKelvin = info[3];
  const tempCelsius = Math.round(info[4]);
  const tempFahrenheit = Math.round(info[5]);
  const country = info[6];
  const longitute = info[7];
  const latitute = info[8];
  const iconId = info[9].slice(0, info[9].length - 1);

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
    // console.log(iconObject[iconId]);
    iconNameId = iconObject[iconId];
  } else {
    asset = 10;
    // console.log(iconObject[iconId]);
    iconNameId = iconObject[iconId];
  }

  const tempChanger = (evt) => {
    const element = evt.target;
    // console.log(element.parentElement.children[1]);
    if (element.className === "C") {
      element.style.color = "rgb(43, 43, 43)";
      element.parentElement.lastChild.style.color = "rgb(168, 168, 168)";
      element.parentElement.firstChild.textContent = tempCelsius;
    } else if (element.className === "F") {
      element.style.color = "rgb(43, 43, 43)";
      element.parentElement.children[1].style.color = "rgb(168, 168, 168)";
      element.parentElement.firstChild.textContent = tempFahrenheit;
    }
  };

  return (
    <div className={`weatherSlotContainer ${weatherExplain}`}>
      <div className="cityNameContainer">
        <h2>{cityName}</h2>
        <div className="countryContainer">
          <h5>{country}</h5>
        </div>
      </div>
      <div className="weatherContainer">
        <p>{weather}</p>
        <p>|</p>
        <p>{weatherExplain}</p>
      </div>
      <div className="tempContainer">
        <p className="temperature">{tempCelsius}</p>
        <p className="C" onClick={(e) => tempChanger(e)}>
          °C
        </p>
        <p> | </p>
        <p className="F" onClick={tempChanger}>
          °F
        </p>
      </div>
      {/* <h5>{longitute} long</h5>
      <h5>{latitute} lat</h5> */}

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
