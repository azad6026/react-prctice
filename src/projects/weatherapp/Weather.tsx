import { useEffect, useState } from "react";
import { getWeather, WeatherData } from "./weatherService";
import "./weather.css";

interface WeatherProps {
  city: string;
}

const Weather = ({ city }: WeatherProps) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  useEffect(() => {
    const fetchWeather = async () => {
      const weather = await getWeather(city);
      setWeather(weather);
      console.log(weather);
    };
    fetchWeather();
  }, [city]);
  return (
    <div className="weather-widget-wrapper">
      <div className="weather-widget">
        {/* {error && <p>{error}</p>} */}
        {weather && (
          <>
            <button>Select xi</button>
            <h2>Selected Location: {weather.name}</h2>
            <p className="temp">{weather.main.temp}°C</p>
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
    </div>
  );
};

export default Weather;
