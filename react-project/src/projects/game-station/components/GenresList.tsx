import useGenres from "../hooks/useGeres";

const GenresList = () => {
  const { data, error, isLoading } = useGenres();

  return (
    <>
      {error && <p>{error}</p>}
      <div className="genres-list">
        {isLoading && <p>Loading...</p>}
        {data.map((genre) => (
          <button key={genre.id} className="genre">
            <img width="20px" src={genre.background_image} alt={genre.name} />
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
