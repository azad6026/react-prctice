// components/FavoritesGrid.tsx
import { useFavoritesStore } from "../stores/useFavoritesStore";
import MovieGrid from "./MovieGrid.client";

export default function FavoritesGrid() {
  const { favorites } = useFavoritesStore();

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4 px-4">Your Favorites</h2>
      <MovieGrid movies={favorites} />
    </div>
  );
}
