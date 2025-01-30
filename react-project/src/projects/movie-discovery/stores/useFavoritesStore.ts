import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Movie } from "../types/movie";

interface FavoritesState {
  favorites: Movie[];
  toggleFavorite: (movie: Movie) => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set) => ({
      favorites: [],
      toggleFavorite: (movie) =>
        set((state) => ({
          favorites: state.favorites.some((m) => m.id === movie.id)
            ? state.favorites.filter((m) => m.id !== movie.id)
            : [...state.favorites, movie],
        })),
    }),
    { name: "favorites-store" }
  )
);
