import "../style.css";
import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { movieReducer, initialState } from "./MovieReducer";
import { MovieContextProps } from "../types";

interface Props {
  children: ReactNode;
}

const MovieContext = createContext<MovieContextProps | undefined>(undefined);

const MovieProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  useEffect(() => {
    const storedMovies = localStorage.getItem("movies");
    if (storedMovies) {
      dispatch({ type: "SET_MOVIES", payload: JSON.parse(storedMovies) });
    }
  }, []);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};

const useMovies = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovies must be used within a MovieProvider");
  }
  return context;
};

export { MovieProvider, useMovies, MovieContext };
