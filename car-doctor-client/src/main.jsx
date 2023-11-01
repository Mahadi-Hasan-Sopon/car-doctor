import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import AuthContextProvider from "./Contexts/AuthContextProvider.jsx";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
