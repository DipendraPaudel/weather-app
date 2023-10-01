import axios, {
  AxiosInstance,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

export const getToken = () => localStorage.getItem("token");

const httpClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_WEATHER_API_ENDPOINT,
});

httpClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default httpClient;
