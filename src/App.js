import React, { useEffect, useState } from "react";
import "./App.css";
import { Nav } from "./Components/Nav";
import { WeatherSlot } from "./Components/WeatherSlot";

function App() {
  const slotHolder = [];
  // const valueHolder = [];

  const [slot, setSlot] = useState(slotHolder);

  useEffect(() => {}, [slot]);

  let weather,
    weatherExplain,
    tempKelvin,
    tempCelsius,
    country,
    longitute,
    latitute;

  let response;

  async function getWeather(city) {
    response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=33a10730e6ca0c3509477c6f462add13`
    );
    response = await response.json();

    weather = response.weather[0].main;
    weatherExplain = response.weather[0].description;
    tempKelvin = response.main.temp;
    tempCelsius = tempKelvin - 273.15;
    country = response.sys.country;
    longitute = response.coord.lon;
    latitute = response.coord.lat;

    createSlot(city);
  }

  const createSlot = (city) => {
    if (slot.includes(city)) {
      alert("already added");
    } else {
      setSlot((pre) => [...pre, city]);
    }
  };

  const onSearch = () => {
    let city = document
      .getElementsByClassName("cityName")[0]
      .value.toLowerCase();
    city = city.charAt(0).toUpperCase() + city.slice(1);
    getWeather(city);
    document.getElementsByClassName("cityName")[0].value = "";
  };

  return (
    <div className="App">
      <div className="page">
        <Nav onSearch={onSearch} />
        <div className="slotArea">
          {slot.map((city, index) => (
            <WeatherSlot
              key={city + 1}
              city={city}
              index={index}
              weather={weather}
              weatherExplain={weatherExplain}
              tempKelvin={tempKelvin}
              tempCelsius={tempCelsius}
              country={country}
              longitute={longitute}
              latitute={latitute}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
