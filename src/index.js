import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import FavoriteProvider from "./contexts/FavoriteContext";
import NavbarProvider from "./contexts/NavbarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MantineProvider>
    <FavoriteProvider>
      <NavbarProvider>
        <App />
      </NavbarProvider>
    </FavoriteProvider>
  </MantineProvider>
);
