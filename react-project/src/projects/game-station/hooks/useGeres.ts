import { useEffect, useState } from "react";
import getApiUrl from "../services/api-client";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Genres {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}
interface ResultsInterface {
  count: number;
  results: Genres[];
}
const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    fetch(getApiUrl("genres"), { signal: controller.signal })
      .then((response) => response.json())
      .then((data: ResultsInterface) => {
        setGenres(data.results);
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
  return { genres, error, isLoading };
};
export default useGenres;
