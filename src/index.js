import React from "react";
import ReactDOM from "react-dom";

import "./assets/scss/main.scss";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
