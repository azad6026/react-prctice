import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}
const useGenres = () => useData<Genres>("genres");

export default useGenres;
