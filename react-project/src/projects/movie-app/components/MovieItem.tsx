import React from "react";
import { Movie } from "../types";

interface MovieItemProps {
  movie: Movie;
  removeMovie: (id: string) => void;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie, removeMovie }) => {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <p className="rating">Rating: {movie.rating}</p>
      <p>{movie.description}</p>
      <button onClick={() => removeMovie(movie.id)}>Remove</button>
    </div>
  );
};

export default MovieItem;
