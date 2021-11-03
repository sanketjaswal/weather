import "./App.css";
import { Nav } from "./Components/Nav";

function App() {
  async function getWeather() {
    let response = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=3ef2ff326326b8bc60608844658645e4"
    );
    response = await response.json();
    // const Quote = response.data.quote;
    // const Character = response.data.character.trim();

    // document.getElementById("Quote").innerHTML = Quote;
    // document.getElementById("Name").innerHTML = "- " + Character;
    console.log(response);
  }

  const onSearch = () => {
    console.log(document.getElementsByClassName("cityName")[0].value);
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
