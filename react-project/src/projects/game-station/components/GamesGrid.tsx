import useGames from "../hooks/useGames";
import Card from "./Card";

const GamesGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <p>{error}</p>}
      <div className="games-grid">
        {games.map((game) => (
          <Card key={game.id} game={game} />
        ))}
      </div>
      <style>
        {`
          .games-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1rem;
            padding: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default GamesGrid;
