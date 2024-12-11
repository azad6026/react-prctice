import { Games } from "../hooks/useGames";
import getCroppeedImageUrl from "../services/image-url";

interface CardProps {
  game: Games;
}
const Card = ({ game }: CardProps) => {
  return (
    <>
      <figure>
        <img
          width="200px"
          src={getCroppeedImageUrl(game.background_image)}
          alt={game.name}
        />
        <figcaption>
          <h2>{game.name}</h2>
        </figcaption>
      </figure>
    </>
  );
};

export default Card;
