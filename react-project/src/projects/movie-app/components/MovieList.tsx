import React from "react";
import { useMovies } from "../context/MovieContext";
import MovieItem from "./MovieItem";
import { Movie } from "../types";

const MovieList: React.FC = () => {
  const { state, dispatch } = useMovies();

  const removeMovie = (id: string) => {
    dispatch({
      type: "REMOVE_MOVIE",
      payload: { id, title: "", rating: "", description: "", poster: "" },
    });
  };

  return (
    <div className="movie-grid">
      {state.movies.map((movie: Movie) => (
        <MovieItem key={movie.id} movie={movie} removeMovie={removeMovie} />
      ))}
    </div>
  );
};

export default MovieList;
