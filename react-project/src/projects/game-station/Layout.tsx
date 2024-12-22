import { useState } from "react";
import GenresList from "./components/GenresList";
import GamesGrid from "./components/GamesGrid";
import NavBar from "./NavBar";
import { Genres } from "./hooks/useGenres";

// interface LayoutProps {
//   onSelectGenre: (genre: Genres) => void;
// }

const Layout = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);

  return (
    <>
      <div className="grid-container">
        <nav className="navbar" aria-label="Main Navigation">
          <NavBar />
        </nav>
        <aside className="genres-list" aria-label="Genres List">
          <GenresList onSelectGenre={setSelectedGenre} />
        </aside>
        <main className="games-grid" aria-label="Games Grid">
          <GamesGrid selectedGenre={selectedGenre} />
        </main>
      </div>
    </>
  );
};

export default Layout;
