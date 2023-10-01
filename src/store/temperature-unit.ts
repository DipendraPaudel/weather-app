import { create } from "zustand";

interface ITemperatureUnit {
  temperatureUnit: "fahrenheit" | "celsius";
  updateTemperatureUnit: (t: "fahrenheit" | "celsius") => void;
}

export const useTemperatureUnitStore = create<ITemperatureUnit>((set) => ({
  temperatureUnit: "fahrenheit",
  updateTemperatureUnit: (tU) =>
    set((state) => ({ ...state, temperatureUnit: tU })),
}));
