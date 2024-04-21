import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TicTacToeProvider } from "./providers/TicTacToeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TicTacToeProvider>
      <App />
    </TicTacToeProvider>
  </React.StrictMode>
);
