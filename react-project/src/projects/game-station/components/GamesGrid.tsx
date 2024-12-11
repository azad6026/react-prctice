import useGames from "../hooks/useGames";

const GamesGrid = () => {
  const { games, error } = useGames();
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
