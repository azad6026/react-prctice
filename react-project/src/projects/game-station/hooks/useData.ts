import { useEffect, useState } from "react";
import getApiUrl from "../services/api-client";

interface ResultsInterface<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    fetch(getApiUrl(endpoint), { signal: controller.signal })
      .then((response) => response.json())
      .then((data: ResultsInterface<T>) => {
        setData(data.results);
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
  return { data, error, isLoading };
};
export default useData;
