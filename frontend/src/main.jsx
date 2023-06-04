import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/roboto";
import "@fontsource-variable/open-sans";

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

const colors = {
  blue: {
    900: "#0D2436",
    800: "#183B56",
    700: "#5A7184",
  },
  sky: {
    900: "#1565D8",
  },
};

const fonts = {
  body: "Open Sans Variable",
  heading: "Open Sans Variable",
};
const theme = extendTheme({ colors, fonts });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
