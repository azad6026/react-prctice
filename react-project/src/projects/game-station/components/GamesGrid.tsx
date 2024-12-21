import useGames from "../hooks/useGames";
import { Genres } from "../hooks/useGenres";
import Card from "./Card";
import CardContainer from "./CardContainer";
import CardSkeleton from "./CardSkeleton";

interface Props {
  selectedGenre: Genres | null;
}
const GamesGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  // Log errors and loading state
  if (error) {
    console.error("Error fetching games:", error);
  }
  if (isLoading) {
    console.log("Loading games...");
  }

  return (
    <>
      {error && <p>{error}</p>}
      <div className="games-grid">
        {isLoading &&
          skeleton.map((card) => (
            <CardContainer key={card}>
              <CardSkeleton />
            </CardContainer>
          ))}
        {data.map((game) => (
          <CardContainer key={game.id}>
            <Card game={game} />
          </CardContainer>
        ))}
      </div>
      <style>
        {`
          .games-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            padding: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default GamesGrid;
