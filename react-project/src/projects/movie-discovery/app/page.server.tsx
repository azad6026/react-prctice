// app/page.server.tsx
import { fetchTrendingMovies } from "../lib/api";
import MovieGrid from "../components/MovieGrid.client";

export default async function Home() {
  const movies = await fetchTrendingMovies(); // Server-side fetch
  return (
    <div>
      <nav>
        <h1>Movie Discovery</h1>
      </nav>
      <MovieGrid movies={movies} />
    </div>
  );
}
