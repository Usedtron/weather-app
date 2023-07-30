import React, { useState } from "react";
import axios from "axios";
import { fahrenheitToCelcius, milesToKilometers } from "./utils";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [iconName, setIconName] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`;
  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        setIconName(response.data.weather[0].icon);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <div className="App">
      <div className="search">
        <h1> Meteo</h1>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? (
              <h1>{fahrenheitToCelcius(data.main.temp.toFixed())}°C</h1>
            ) : null}
          </div>
          <div className="icon">
            {iconName !== "" && (
              <img
                src={`https://openweathermap.org/img/wn/${iconName}@2x.png`}
              />
            )}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">
                  {fahrenheitToCelcius(data.main.temp.toFixed())}°C
                </p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? (
                <p className="bold">
                  {milesToKilometers(data.wind.speed.toFixed())} km/h
                </p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/*
const icons =[parly, sunny, rain, cloudy, snowy, stormy];
const getIcon = (weather) => {
  switch(weather){
    case "Parly Cloud"
     return icons[0]
     break;
    case "Sunny"
     return icons[1]
     break;
    case "Clear"
     return icons[1]
     break;
    case "Light rain"
     return icons[2]
     break;
    case "Moderate rain"
     return icons[2]
     break;
    case "Heavy Rain"
     return icons[2]
     break;
    case "Overcast"
     return icon[3]
     break;
    case "Snow"
     return icon[4]
     break;
    case "Moderate or heavy rain wiht tunder"
     return icons[5]
     break;
    default:
       return
  }
}
  */

export default App;
