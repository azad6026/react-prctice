import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ed8dfcff9fea48fd9c9446c1a5be8932",
  },
});

class APIClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
