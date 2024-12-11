import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import baseUrl from "../services/api-client";
import getApiUrl from "../services/api-client";

interface Games {
  id: number;
  name: string;
}
interface ResultsInterface {
  count: number;
  results: Games[];
}
const GamesGrid = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(getApiUrl("games"))
      .then((response) => response.json())
      .then((data: ResultsInterface) => setGames(data.results))
      .catch((err) => setError(err.message));
  }, []);
  return (
    <>
      {error && <p>{error}</p>}
      <div className="games-grid">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <h2>{game.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};
export default GamesGrid;
