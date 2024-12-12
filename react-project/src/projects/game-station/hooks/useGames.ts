import { useEffect, useState } from "react";
import getApiUrl from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}
interface ResultsInterface {
  count: number;
  results: Games[];
}
const useGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    fetch(getApiUrl("games"), { signal: controller.signal })
      .then((response) => response.json())
      .then((data: ResultsInterface) => {
        setGames(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        setError(err.message);
        setIsLoading(false);
      });
    //   .finally(() => setIsLoading(false));
    return () => controller.abort();
  }, []);
  return { games, error, isLoading };
};
export default useGames;
