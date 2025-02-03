import { Movie } from "../types/movie";
import MovieCard from "./MovieCard.client";
interface Props {
  movies: Movie[];
}

export default function MovieGrid({ movies }: Props) {
  return (
    <div className="movie-grid-wrapper">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
