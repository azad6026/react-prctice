import { CitySuggestion } from "./AddCity";

const API_KEY = import.meta.env.VITE_WEATHER_MAP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

export const getWeather = async (city: string): Promise<WeatherData | null> => {
  try {
    const response = await fetch(
      `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error("No response");
    const data: WeatherData = await response.json();
    console.log("Weather data fetched:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const getWeatherByCoordinates = async (
  lat: number,
  lon: number
): Promise<WeatherData | null> => {
  try {
    const response = await fetch(
      `${BASE_URL}weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) throw new Error("No response");
    const data: WeatherData = await response.json();
    console.log("Weather data fetched by coordinates:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const searchCities = async (
  query: string
): Promise<CitySuggestion[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}find?q=${query}&appid=${API_KEY}&type=like&sort=population&cnt=5`
    );
    if (!response.ok) throw new Error("No response");
    const data = await response.json();
    console.log("City search data:", data.list);
    // Map the list of cities to include both name and country
    const names = data.list.map((city: any) => ({
      name: city.name,
      country: city.sys.country,
    }));
    return names;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
