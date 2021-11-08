import React from "react";
import "./WeatherSlot.css";

export const WeatherSlot = ({ index, info, deleteSlot, hideSlot }) => {
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

  // console.log(index);

  let iconObject = {
    "01": "Stdaec", // Clear
    "02": "VAmWRg", // Clouds
    "03": "dgjK9i", // broken clouds
    "04": "dgjK9i", // scattered clouds , outcast clouds
    "09": "rpC1Rd", // Drizzle
    10: "XkF78Y", // Rain
    11: "JA7Fsb", // ThunderStorm
    13: "WtPCZs", // Snow
    50: "kOfPKE", // Mist, Smoke ,Haze
  };

  let asset;
  let iconNameId;

  if (iconId < "10") {
    asset = 4;

    iconNameId = iconObject[iconId];
  } else {
    asset = 10;
    iconNameId = iconObject[iconId];
  }

  const tempChanger = (evt) => {
    const element = evt.target;
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
    <div className="weatherSlotContainer">
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

      <div className="note_icon trash_icon" onClick={() => deleteSlot(index)}>
        <i className="fas fa-times"></i>
      </div>
      <div className="note_icon hide_icon" onClick={(e) => hideSlot(e)}>
        <i class="fas fa-archive"></i>
      </div>

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
