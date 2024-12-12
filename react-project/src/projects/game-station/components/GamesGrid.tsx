import useGames from "../hooks/useGames";
import Card from "./Card";
import CardContainer from "./CardContainer";
import CardSkeleton from "./CardSkeleton";

const GamesGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <p>{error}</p>}
      <div className="games-grid">
        {isLoading &&
          skeleton.map((card) => (
            <CardContainer>
              {" "}
              <CardSkeleton key={card} />
            </CardContainer>
          ))}
        {data.map((game) => (
          <CardContainer>
            <Card key={game.id} game={game} />
          </CardContainer>
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
