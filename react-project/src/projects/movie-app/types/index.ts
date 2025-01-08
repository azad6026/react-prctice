export interface Movie {
  id: string;
  title: string;
  rating: string;
  description: string;
  poster: string;
}

export interface MovieState {
  movies: Movie[];
}

export interface MovieAction {
  type: "ADD_MOVIE" | "REMOVE_MOVIE" | "SET_MOVIES";
  payload: Movie | Movie[];
}

export interface MovieContextProps {
  state: MovieState;
  dispatch: React.Dispatch<MovieAction>;
}
