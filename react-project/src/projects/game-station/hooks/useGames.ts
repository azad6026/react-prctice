import useData from "./useData";
import { Genres } from "./useGenres";

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

const useGames = (selectedGenre: Genres | null) => {
  console.log("Selected genre:", selectedGenre); // Add this log
  return useData<Games>(
    "games",
    selectedGenre ? { genres: selectedGenre.id } : {}
  );
};

export default useGames;
