import { useRef, useState } from "react";
import WeatherSearch from "./Search";
import WeatherDetails, { IWeatherDetails } from "./Details";
import { useWeatherSearch } from "../../service/weather-search";
import Error from "../../components/Error";
import LoaderAnimation from "../../components/LoaderAnimation";
import { WorldMap } from "../../assets/icons";
import Header from "./Header";

const WeatherHomepage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFetchedOnce, setIsFetchedOnce] = useState(false);

  const {
    mutate: searchWeather,
    data,
    error,
    isError,
    isLoading,
  } = useWeatherSearch();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();

    const inputValue = inputRef?.current?.value?.trim() ?? "";

    // prevent further steps if input field is empty or is already calling api
    if (!inputValue || isLoading) return;

    searchWeather(inputValue.toLocaleLowerCase());
    setIsFetchedOnce(true);
  };

  const details = data?.data as IWeatherDetails | undefined;

  return (
    <div className="relative text-sm lg:text-base">
      <div className="flex flex-col min-h-screen justify-center items-center font-roboto max-w-4xl mx-auto">
        <Header />

        <WeatherSearch
          handleSearch={handleSearch}
          isSubmitting={isLoading}
          inputRef={inputRef}
        />

        <div
          className={`transition-all duration-300 w-full ${
            isFetchedOnce ? "flex-1 h-full" : "h-0"
          }`}
        >
          {isLoading ? (
            <LoaderAnimation />
          ) : isError ? (
            <Error error={error} />
          ) : (
            details && <WeatherDetails {...details} />
          )}
        </div>
      </div>

      {/* Put background image of world map with background opacity 40 */}
      <div className="absolute top-0 left-0 -z-10 w-full h-full">
        <img src={WorldMap} alt="" className="w-full h-full" />
        <div className="absolute bg-black bg-opacity-40 w-full h-full top-0 left-0"></div>
      </div>
    </div>
  );
};

export default WeatherHomepage;
