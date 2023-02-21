import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

import "./main.css";

ReactDOM.createRoot(document.querySelector("#app") as Element).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
);
