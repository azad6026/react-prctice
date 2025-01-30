import { useEffect, useState } from "react";
import { getWeatherByCoordinates, WeatherData } from "./weatherService";
import "./weather.css";

const CurrentLocationWether = () => {
  const [weather, setWather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchWeather = async (lat: number, lon: number) => {
      const data = await getWeatherByCoordinates(lat, lon);
      if (data) {
        setWather(data);
        setError(null);
      } else {
        setError("Could not fetch data");
      }
    };
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        (err) => {
          console.error(err);
          setError("Could not get your location");
        }
      );
    }
  }, []);
  return (
    <div className="weather-widget">
      {error && <p>{error}</p>}
      {weather && (
        <>
          <h2>Current Location Weather</h2>
          <h3>{weather.name}</h3> <p className="temp">{weather.main.temp}°C</p>
          <p className="desc">{weather.weather[0].description}</p>
          <div className="details">
            <div>
              <p>Humidity</p> <p>{weather.main.humidity}%</p>
            </div>
            <div>
              <p>Wind Speed</p> <p>{weather.wind.speed} m/s</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CurrentLocationWether;
