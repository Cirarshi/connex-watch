// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // ✅
import App from "./App";
import "./index.css"; // Tailwind / global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
