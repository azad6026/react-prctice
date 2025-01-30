import { Movie } from "../types/movie";
import { useFavoritesStore } from "../stores/useFavoritesStore";
import { HeartIcon } from "@heroicons/react/24/solid";

interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  const { favorites, toggleFavorite } = useFavoritesStore();
  const isFavorite = favorites.some((m) => m.id === movie.id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{movie.title}</h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {movie.overview}
        </p>
        <button
          onClick={() => toggleFavorite(movie)}
          className={`mt-4 flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            isFavorite
              ? "bg-red-500 hover:bg-red-600"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white`}
        >
          <HeartIcon className="w-5 h-5" />
          {isFavorite ? "Remove Favorite" : "Add Favorite"}
        </button>
      </div>
    </div>
  );
}
