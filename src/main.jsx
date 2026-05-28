import React from "react";
import ReactDOM from "react-dom/client";
import "aos/dist/aos.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/home.css";
import "./styles/projects.css";
import "./styles/components.css";

import "./styles/theme-dark.css";
//import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
