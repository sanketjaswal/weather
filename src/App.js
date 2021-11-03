import React, { useEffect, useState } from "react";
import "./App.css";
import { Nav } from "./Components/Nav";

function App() {
  const slotHolder = [];
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

    console.log(weather);
    console.log(weatherExplain);
    console.log(tempKelvin);
    console.log(tempCelsius);
    console.log(country);
    console.log(longitute);
    console.log(latitute);
  }

  const createSlot = () => {
    setSlot((pre) => [...pre, ""]);
  };

  const onSearch = () => {
    let city = document.getElementsByClassName("cityName")[0].value;
    getWeather(city);
    createSlot();
  };

  return (
    <div className="App">
      <div className="page">
        {/* <button onClick={() => getQuotes()}>weather</button> */}
        <Nav onSearch={onSearch} />
      </div>
    </div>
  );
}

export default App;
