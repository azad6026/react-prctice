// components/FavoritesGrid.tsx
import { useFavoritesStore } from "../stores/useFavoritesStore";
import MovieGrid from "./MovieGrid.client";

export default function FavoritesGrid() {
  const { favorites } = useFavoritesStore();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Favorites</h2>
      {favorites.length > 0 ? (
        <MovieGrid movies={favorites} />
      ) : (
        <p className="text-gray-500">No favorites yet. Search and add some!</p>
      )}
    </div>
  );
}
