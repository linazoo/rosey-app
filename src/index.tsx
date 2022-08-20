import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#303f9f",
    },
    secondary: {
      main: "#ff8a65",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
    warning: {
      main: "#ff9800",
    },
  },
  typography: {
    h1: {
      fontFamily: "Libre Baskerville",
    },
    h3: {
      fontFamily: "Libre Baskerville",
    },
    h4: {
      fontFamily: "Libre Baskerville",
    },
    h5: {
      fontFamily: "Libre Baskerville",
    },
    h6: {
      fontFamily: "Libre Baskerville",
    },
    subtitle1: {
      fontFamily: "Libre Baskerville",
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
