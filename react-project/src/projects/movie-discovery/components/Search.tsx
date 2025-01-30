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
    enabled: !!debouncedSearchTerm,
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
      <MovieGrid movies={data || []} />
    </div>
  );
}
