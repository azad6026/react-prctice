import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Movie } from "../types/movie";
import { useDebounce } from "../hooks/useDebounce";
import MovieGrid from "./MovieGrid.client";
import { fetchSearchMovies, fetchTrendingMovies } from "../lib/api";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // Fetch trending movies when search is empty
  const { data } = useQuery<Movie[]>({
    queryKey: ["movies", debouncedSearchTerm],
    queryFn: () =>
      debouncedSearchTerm
        ? fetchSearchMovies(debouncedSearchTerm)
        : fetchTrendingMovies(), // Fallback to trending
  });

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search movies..."
        className="w-full p-2 border rounded-lg"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <h2 className="text-2xl font-bold my-4">
        {debouncedSearchTerm ? "Search Results" : "Trending Movies"}
      </h2>
      <MovieGrid movies={data || []} />
    </div>
  );
}
