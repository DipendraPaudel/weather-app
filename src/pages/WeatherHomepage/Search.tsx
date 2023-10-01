import Button from "../../components/Button";
import TemperatureToggle from "../../components/Toggle/TemperatureToggle";

const WeatherSearch = ({
  handleSearch,
  isSubmitting,
  inputRef,
}: IWeatherSearch) => {
  return (
    <div className="p-8 flex flex-col-reverse sm:flex-row justify-between w-full">
      <form
        className="flex justify-center relative rounded-full overflow-hidden bg-red-400"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          className="border border-gray-300 w-full sm:w-96 md:w-112 py-3 pl-5 pr-32 rounded-full"
          placeholder="Search for a city"
          ref={inputRef}
        />

        <div className="absolute right-0 h-full z-10 w-28">
          <Button label="Search" isDisabled={isSubmitting} />
        </div>
      </form>

      <TemperatureToggle />
    </div>
  );
};

export default WeatherSearch;

interface IWeatherSearch {
  handleSearch: (event: React.FormEvent) => void;
  isSubmitting: boolean;
  inputRef: React.LegacyRef<HTMLInputElement> | undefined;
}
