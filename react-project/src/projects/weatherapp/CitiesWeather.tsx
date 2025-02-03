// src/CitiesWeather.tsx

// Import necessary libraries and hooks
import React, { useState } from "react";
import { getWeather, WeatherData } from "./weatherService";
import AddCity from "./AddCity";

// Create the CitiesWeather component
const CitiesWeather: React.FC = () => {
  // State to manage weather data for added cities
  const [citiesWeather, setCitiesWeather] = useState<WeatherData[]>([]);

  // Function to add a city and fetch its weather data
  const addCity = async (city: string) => {
    const data = await getWeather(city);
    if (data) {
      setCitiesWeather((previousCitiesWeather) => [
        ...previousCitiesWeather,
        data,
      ]);
    }
  };

  return (
    <div>
      {/* Component to add cities */}
      <AddCity
        onAddCity={addCity}
        maxCities={5}
        cities={citiesWeather.map((c) => c.name)}
      />
      <div className="weather-widget-wrapper">
        {/* Display weather data for added cities */}
        {citiesWeather.map((city) => (
          <div key={city.name} className="weather-widget">
        <h2>{city.name}</h2>
        <h3>of {city.sys.country}</h3>
        <p className="temp">{Math.round(city.main.temp)}°C</p>
        <p className="desc">
          {city.weather[0].description}{" "}
          <img className="emoji" src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`} />
        </p>
        <div className="details">
          <div>
            <p>Humidity</p>
            <p>{city.main.humidity}%</p>
          </div>
          <div>
            <p>Wind Speed</p>
            <p>{city.wind.speed} m/s</p>
          </div>
        </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitiesWeather;
