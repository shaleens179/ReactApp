import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Keep this if you have global styles
import App from "./App";
import "./fix-leaflet"; // Import the fix for Leaflet markers

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

