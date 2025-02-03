import React, { ChangeEvent, useState } from "react";
import { searchCities } from "./weatherService";

interface AddCityProps {
  onAddCity: (city: string) => void;
  maxCities: number;
  cities: string[];
}

// Define the interface for city suggestions including name and country
export interface CitySuggestion {
  name: string;
  country: string;
}

const AddCity: React.FC<AddCityProps> = ({ onAddCity, maxCities, cities }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestedCities, setSuggestedCities] = useState<CitySuggestion[]>([]);

  const fetchCitySuggestions = async (suggestion: string) => {
    if (suggestion.length > 2) {
      const cities = await searchCities(suggestion);
      setSuggestedCities(cities);
      console.log("Suggested cities:", cities);
    } else {
      setSuggestedCities([]);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    fetchCitySuggestions(value);
    console.log("Input value:", value);
  };

  const handleSubmitCity = () => {
    if (
      inputValue &&
      !cities.includes(inputValue) &&
      cities.length < maxCities
    ) {
      onAddCity(inputValue);
      setInputValue("");
      setSuggestedCities([]);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        onChange={handleInputChange}
        value={inputValue}
        placeholder="Type City..."
      />
      <ul>
        {suggestedCities.map((city, index) => (
          <li
            key={index}
            onClick={() => {
              setInputValue(`${city.name}, ${city.country}`);
              setSuggestedCities([]);
            }}
          >
            {city.name}, {city.country}
          </li>
        ))}
      </ul>
      <button onClick={handleSubmitCity} disabled={cities.length >= maxCities}>
        Add city
      </button>
    </div>
  );
};

export default AddCity;
