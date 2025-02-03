import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Movie } from "../types/movie";
import { useDebounce } from "../hooks/useDebounce";
import MovieGrid from "./MovieGrid.client";
import { fetchSearchMovies } from "../lib/api";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const { data } = useQuery<Movie[]>({
    queryKey: ["search", debouncedSearchTerm],
    queryFn: () => fetchSearchMovies(debouncedSearchTerm),
    enabled: !!debouncedSearchTerm, // Only fetch when search term exists
  });
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {debouncedSearchTerm && (
          <div className="search-results">
            <h2 className="search-title">Search Results</h2>
            <MovieGrid movies={data || []} />
          </div>
        )}
      </div>
    </>
  );
}
