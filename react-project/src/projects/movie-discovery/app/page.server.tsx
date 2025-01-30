// app/page.server.tsx
import { fetchTrendingMovies } from "../lib/api";
import MovieGrid from "../components/MovieGrid.client";

export default async function Home() {
  const movies = await fetchTrendingMovies(); // Server-side fetch
  return (
    <div>
      <nav className="bg-blue-600 p-4 text-white">
        <h1 className="text-2xl font-bold">Movie Discovery</h1>
      </nav>
      <MovieGrid movies={movies} />
    </div>
  );
}
