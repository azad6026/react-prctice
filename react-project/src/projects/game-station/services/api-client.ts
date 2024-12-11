const apiKey = import.meta.env.VITE_GAMES_API_KEY;
const baseUrl = `https://api.rawg.io/api`;
const getApiUrl = (path: string) => `${baseUrl}/${path}?key=${apiKey}`;
export default getApiUrl;
