import { Games } from "../hooks/useGames";

interface CardProps {
  game: Games;
}
const Card = ({ game }: CardProps) => {
  return (
    <>
      <figure>
        <img src={game.background_image} alt={game.name} />
        <figcaption>
          <h2>{game.name}</h2>
        </figcaption>
      </figure>
    </>
  );
};

export default Card;
