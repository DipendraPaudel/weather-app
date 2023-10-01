import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";
import httpClient from "./service-axios";
import apiEndpoint from "./service-api";

const fetchWeatherDetails = (search: string) => {
  return httpClient.post(
    `${apiEndpoint.weather.getWeatherDetail}?q=${search}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }&units=metrics`
  );
};

export const useWeatherSearch = () => {
  return useMutation(fetchWeatherDetails, {
    onError: (error: AxiosError) => {
      console.log(error);

      return error;
    },
  });
};
