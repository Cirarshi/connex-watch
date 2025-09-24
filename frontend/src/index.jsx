// src/index.js
import React from "react";
import ReactDOM from "react-dom/client"; // ✅
import App from "./App";
import { AuthProvider } from "/src/contexts/AuthContext";
import "./index.css"; // Tailwind / global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
