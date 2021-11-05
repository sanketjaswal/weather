import React, { useEffect, useState } from "react";
import "./App.css";
import { Nav } from "./Components/Nav";
import { WeatherSlot } from "./Components/WeatherSlot";
import { Error404 } from "./Components/Error404";
import { Error400 } from "./Components/Error400";

function App() {
  const slotHolder = [];
  const valueHolder = [];

  const [slot, setSlot] = useState(slotHolder);
  const [info, setInfo] = useState(valueHolder);

  useEffect(() => {
    // console.log("slot : " + slot);
    // console.log("info : " + info);
  }, [slot, info]);

  // let weather;

  async function getWeather(city) {
    let response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=33a10730e6ca0c3509477c6f462add13`
    );
    response = await response.json();

    if (response.cod === "404") {
      document.getElementsByClassName("error404Page")[0].style.zIndex = 2;
      document.getElementsByClassName("error404Page")[0].style.opacity = 1;
    } else if (response.cod === "400") {
      document.getElementsByClassName("error400Page")[0].style.zIndex = 2;
      document.getElementsByClassName("error400Page")[0].style.opacity = 1;
    } else {
      const arr = [];

      const cityName = response.name;
      const weather = response.weather[0].main;
      const weatherExplain = response.weather[0].description;
      const tempKelvin = response.main.temp;
      const tempCelsius = tempKelvin - 273.15;
      const tempFahrenheit = (tempCelsius * 9) / 5 + 32;
      const country = response.sys.country;
      const longitute = response.coord.lon;
      const latitute = response.coord.lat;
      const iconId = response.weather[0].icon;

      arr.push(cityName);
      arr.push(weather);
      arr.push(weatherExplain);
      arr.push(tempKelvin);
      arr.push(tempCelsius);
      arr.push(tempFahrenheit);
      arr.push(country);
      arr.push(longitute);
      arr.push(latitute);
      arr.push(iconId);

      // console.log(response);

      createSlot(city, arr);
    }
  }

  const createSlot = (city, arr) => {
    if (slot.includes(city)) {
      alert("already added");
    } else {
      setSlot((pre) => [...pre, city]);
      setInfo((pre) => [...pre, arr]);
    }
  };

  const deleteSlot = (index) => {
    setInfo((pre) => {
      const neW = [...pre];
      neW.splice(index, 1);
      console.log(neW);
      return neW;
    });
    setSlot((pre) => {
      const neW = [...pre];
      neW.splice(index, 1);
      console.log(neW);
      return neW;
    });
    // postNotes();
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
      <Error404 />
      <Error400 />
      <div className="page">
        <Nav onSearch={onSearch} />
        <div className="slotArea">
          {info.map((info, index) => (
            <WeatherSlot
              // key= index}
              index={index}
              info={info}
              deleteSlot={deleteSlot}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
