import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TooltipProvider } from "./components/Tooltip";
import "./index.css";
import { TicTacToeProvider } from "./providers/TicTacToeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <TicTacToeProvider>
      <TooltipProvider delayDuration={200}>
        <App />
      </TooltipProvider>
    </TicTacToeProvider>
  </React.StrictMode>
);
