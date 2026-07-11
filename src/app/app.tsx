import React from "react";
import ReactDOM from "react-dom/client";

import HomePage from "@/pages/home";

import "./styles";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
);
