import { Movie, MovieState, MovieAction } from "../types";

const initialState: MovieState = {
  movies: [],
};

const movieReducer = (state: MovieState, action: MovieAction): MovieState => {
  switch (action.type) {
    case "ADD_MOVIE":
      const updatedMovies = [action.payload as Movie, ...state.movies];
      localStorage.setItem("movies", JSON.stringify(updatedMovies));
      return { movies: updatedMovies };
    case "REMOVE_MOVIE":
      const filteredMovies = state.movies.filter(
        (movie) => movie.id !== (action.payload as Movie).id
      );
      localStorage.setItem("movies", JSON.stringify(filteredMovies));
      return { movies: filteredMovies };
    case "SET_MOVIES":
      return { movies: action.payload as Movie[] };
    default:
      throw new Error("Unknown action type");
  }
};

export { movieReducer, initialState };
