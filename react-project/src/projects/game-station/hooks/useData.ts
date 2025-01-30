import { useEffect, useState } from "react";
import getApiUrl from "../services/api-client";

interface ResultsInterface<T> {
  count: number;
  results: T[];
}

const CORS_PROXY = "";

const useData = <T>(endpoint: string, params?: Record<string, any>) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    // Build the query string
    const queryString = params
      ? "?" + new URLSearchParams(params as Record<string, string>).toString()
      : "";

    const fetchData = async () => {
      try {
        const response = await fetch(
          CORS_PROXY + getApiUrl(`${endpoint}${queryString}`),
          {
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: ResultsInterface<T> = await response.json();
        setData(data.results);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [endpoint, params]);

  return { data, error, isLoading };
};

export default useData;
