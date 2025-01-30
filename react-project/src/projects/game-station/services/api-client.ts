const apiKey = import.meta.env.VITE_GAMES_API_KEY;
const baseUrl = `https://api.rawg.io/api`;

// Ensure the key is always included
const getApiUrl = (path: string) => {
  const hasQueryParams = path.includes("?");
  const keyParam = `key=${apiKey}`;
  const separator = hasQueryParams ? "&" : "?";
  return `${baseUrl}/${path}${separator}${keyParam}`;
};

export default getApiUrl;
