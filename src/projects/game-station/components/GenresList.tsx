import useGenres, { Genres } from "../hooks/useGenres";
import getCroppeedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genres) => void;
}
const GenresList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  return (
    <>
      {error && <p>{error}</p>}
      <div className="genres-list">
        {isLoading && <p>Loading...</p>}
        {data.map((genre) => (
          <button
            key={genre.id}
            className="genre"
            onClick={() => onSelectGenre(genre)}
          >
            <img
              width="20px"
              height="20px"
              src={getCroppeedImageUrl(genre.image_background)}
              alt={genre.name}
            />
            <p>{genre.name}</p>
          </button>
        ))}
      </div>
      <style>
        {`
          .genres-list {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
            padding: 1rem;
          }
          .genre {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem;
            border-radius: 0.5rem;
            background-color: #f5f5f5;
          }
          .genre img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 0.5rem;
          }
        `}
      </style>
    </>
  );
};

export default GenresList;
