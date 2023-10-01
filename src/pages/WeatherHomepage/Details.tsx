import { useTemperatureUnitStore } from "../../store/temperature-unit";

const WeatherDetails = (props: IWeatherDetails) => {
  const { temperatureUnit } = useTemperatureUnitStore();

  const { main, name, weather: allWeatherConditions, wind } = props;

  console.log(props);

  const getTemperature = (t: number) => {
    if (temperatureUnit === "fahrenheit") {
      return `${((t - 273.15) * (9 / 5) + 32).toFixed(2)} ° F`;
    }

    return `${(t - 273.15).toFixed(2)} ° C`;
  };

  return (
    <div className="w-full grid sm:grid-cols-2 p-8 pt-0 gap-8">
      <div className="flex-1 bg-white bg-opacity-90 border border-gray-300 rounded-2xl shadow-lg hover:-translate-x-1 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 md:p-8">
        {allWeatherConditions.map((weather, index) => {
          const { icon, description } = weather;
          return (
            <div key={index} className="flex flex-col items-center">
              <div className="text-2xl pb-2">{name}</div>
              <div className="font-medium">{getTemperature(main.temp)}</div>
              <img
                src={`${import.meta.env.VITE_WEATHER_ICON}/${icon}@2x.png`}
                alt={description}
                className=""
              />
              <div className="capitalize">{description}</div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center space-y-2 flex-1 bg-white bg-opacity-90 border border-gray-300 rounded-2xl shadow-lg hover:-translate-x-1 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 md:p-8">
        <h2 className="text-center pb-4 text-2xl">Weather Details</h2>

        <div className="flex">
          <div className="w-28">Wind Speed</div>
          <div className="font-medium w-24 text-right">{wind.speed} m/s</div>
        </div>
        <div className="flex">
          <div className="w-28">Humidity</div>
          <div className="font-medium w-24 text-right">{main.humidity} %</div>
        </div>
        <div className="flex">
          <div className="w-28">Pressure</div>
          <div className="font-medium w-24 text-right">{main.pressure} hPa</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;

export interface IWeatherDetails {
  id: number;
  base: string;
  clousds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: {
    id: number;
    description: string;
    icon: string;
    main: string;
  }[];
  wind: {
    deg: number;
    speed: number;
  };
}
