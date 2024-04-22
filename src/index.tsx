import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TicTacToeProvider } from "./providers/TicTacToeContext";
import { TooltipProvider } from "./components/Tooltip";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TicTacToeProvider>
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </TicTacToeProvider>
  </React.StrictMode>
);
