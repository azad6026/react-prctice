import { ApiResponse } from "../types/api";
import { Movie } from "../types/movie";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchTrendingMovies(): Promise<Movie[]> {
  const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  const data: ApiResponse<Movie> = await res.json();
  return data.results;
}

export async function fetchSearchMovies(query: string): Promise<Movie[]> {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  const data: ApiResponse<Movie> = await res.json();
  return data.results;
}
