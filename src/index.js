import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";  // ✅ use HashRouter
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
