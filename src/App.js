import React, { useEffect, useState } from "react";
import "./App.css";
import { Nav } from "./Components/Nav";
import { WeatherSlot } from "./Components/WeatherSlot";

function App() {
  const slotHolder = [];
  const slotCities = [];
  const [slot, setSlot] = useState(slotHolder);

  useEffect(() => {
    console.log(slot);
  }, [slot]);

  async function getWeather(city) {
    let response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=33a10730e6ca0c3509477c6f462add13`
    );
    response = await response.json();

    const weather = response.weather[0].main;
    const weatherExplain = response.weather[0].description;
    const tempKelvin = response.main.temp;
    const country = response.sys.country;
    const longitute = response.coord.lon;
    const latitute = response.coord.lat;
    const tempCelsius = tempKelvin - 273.15;

    // console.log(weather);
    // console.log(weatherExplain);
    // console.log(tempKelvin);
    // console.log(tempCelsius);
    // console.log(country);
    // console.log(longitute);
    // console.log(latitute);
    // slotHolder.push(city);
    createSlot(city);
  }

  const createSlot = (city) => {
    setSlot((pre) => [...pre, city]);
  };

  const onSearch = () => {
    let city = document
      .getElementsByClassName("cityName")[0]
      .value.toLowerCase();
    city = city.charAt(0).toUpperCase() + city.slice(1);
    getWeather(city);
  };

  return (
    <div className="App">
      <div className="page">
        <Nav onSearch={onSearch} />
        <div className="slotArea">
          {slot.map((city, index) => (
            <WeatherSlot key={city} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
