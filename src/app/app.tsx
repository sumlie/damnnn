import React from "react";
import ReactDOM from "react-dom/client";

import HomePage from "@/pages/home";
import { inter, mulish } from "@/shared/lib/fonts";
import { Titlebar } from "@/widgets/titlebar";

import "./styles";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
).render(
  <React.StrictMode>
    <div className={`${inter.className} ${mulish.className}`}>
      <Titlebar />
      <HomePage />
    </div>
  </React.StrictMode>,
);
