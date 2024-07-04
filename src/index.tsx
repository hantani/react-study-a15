import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

const queryClient = new QueryClient();

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    background-color: #4c0484;
  }
  body * {
    box-sizing: border-box;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
