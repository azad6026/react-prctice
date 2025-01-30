import React, { useState, useEffect } from "react";
import { useMovies } from "../context/MovieContext";
import { Movie } from "../types";

const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

interface MovieSuggestion {
  id: string;
  title: string;
  year: string;
}

const fetchMovieSuggestions = async (
  query: string
): Promise<MovieSuggestion[]> => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
  );
  const data = await response.json();
  if (data.Response === "True") {
    return data.Search.map((movie: any) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
    }));
  }
  return [];
};

const fetchMovieData = async (id: string): Promise<Movie | null> => {
  const response = await fetch(
    `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
  );
  const data = await response.json();
  if (data.Response === "True") {
    return {
      id: data.imdbID,
      title: data.Title,
      rating: data.imdbRating,
      description: data.Plot,
      poster: data.Poster,
    };
  }
  return null;
};

const AddMovie: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [suggestions, setSuggestions] = useState<MovieSuggestion[]>([]);
  const { dispatch } = useMovies();

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.trim()) {
        const results = await fetchMovieSuggestions(query);
        setSuggestions(results);
      } else {
        setSuggestions([]);
      }
    };
    fetchSuggestions();
  }, [query]);

  const handleSelectSuggestion = async (id: string) => {
    const movieData = await fetchMovieData(id);
    if (movieData) {
      dispatch({
        type: "ADD_MOVIE",
        payload: movieData,
      });
      setQuery("");
      setSuggestions([]);
    } else {
      alert("Movie not found");
    }
  };

  return (
    <div className="suggestions-wrapper">
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie title"
        />
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.id}
                onClick={() => handleSelectSuggestion(suggestion.id)}
              >
                {suggestion.title} ({suggestion.year})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AddMovie;
