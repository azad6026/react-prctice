import { useState } from "react";
import "./App.css";
import Layout from "./projects/game-station/Layout";
import { Genres } from "./projects/game-station/hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);

  return (
    <>
      <Layout
        onSelectGenre={(genre) => setSelectedGenre(genre)}
      />
    </>
  );
}

export default App;
