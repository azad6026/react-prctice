import useData from "./useData";

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
const useGenres = () => useData<Genres>("genres");

export default useGenres;
