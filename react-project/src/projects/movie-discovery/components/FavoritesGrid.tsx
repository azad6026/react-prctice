// components/FavoritesGrid.tsx
import { useFavoritesStore } from "../stores/useFavoritesStore";
import MovieGrid from "./MovieGrid.client";

export default function FavoritesGrid() {
  const { favorites } = useFavoritesStore();

  return (
    <section className="section-wrapper">
      <h2>My Favorites</h2>
      {favorites.length > 0 ? (
        <MovieGrid movies={favorites} />
      ) : (
        <p>No favorites yet. Search and add some!</p>
      )}
    </section>
  );
}
