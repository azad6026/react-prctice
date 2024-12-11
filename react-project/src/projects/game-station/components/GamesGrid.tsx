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
    </>
  );
};
export default GamesGrid;
