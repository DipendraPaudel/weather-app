import { useTemperatureUnitStore } from "../../store/temperature-unit";

const temperatureOptions = [
  {
    label: "°F",
    value: "fahrenheit",
  },
  {
    label: "°C",
    value: "celsius",
  },
];

const TemperatureToggle = () => {
  const { temperatureUnit, updateTemperatureUnit } = useTemperatureUnitStore();

  return (
    <div className="flex justify-end mb-2 sm:mb-0">
      <div className="flex items-center rounded-full overflow-hidden">
        {temperatureOptions.map((temperatureOption) => {
          const { value, label } = temperatureOption;

          const isActive = temperatureUnit === value;

          return (
            <div
              key={value}
              className={`px-6 py-3 ${
                isActive
                  ? "cursor-default bg-primary text-white"
                  : "cursor-pointer bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => {
                !isActive &&
                  updateTemperatureUnit(value as "fahrenheit" | "celsius");
              }}
            >
              {label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TemperatureToggle;
