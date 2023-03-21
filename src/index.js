import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher";
import { StrictMode } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <App />
      <ColorModeSwitcher />
    </ChakraProvider>
  </StrictMode>
);

export const server = `https://api.coingecko.com/api/v3`;