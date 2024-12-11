import { useEffect, useState } from "react";
import getApiUrl from "../services/api-client";

export interface Games {
  id: number;
  name: string;
  background_image: string;
}
interface ResultsInterface {
  count: number;
  results: Games[];
}
const useGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    fetch(getApiUrl("games"), { signal: controller.signal })
      .then((response) => response.json())
      .then((data: ResultsInterface) => setGames(data.results))
      .catch((err) => {
        if (err.name === "AbortError") return;
        setError(err.message);
      });
    return () => controller.abort();
  }, []);
  return { games, error };
};
export default useGames;
