import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WeatherHomepage from "./pages/WeatherHomepage";

// https://fontsource.org/fonts/roboto
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

import "./styles/tailwind.css";
import "./styles/index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <WeatherHomepage />
    </QueryClientProvider>
  </React.StrictMode>
);
