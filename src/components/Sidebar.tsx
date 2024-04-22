import { useTicTacToeContext } from "../providers/TicTacToeContext";
import Info from "./Info/Info";
import { Switch } from "./Switch";

const Sidebar = () => {
  const { gameMode, setIsXNext, setMoveOrder, setSquares, toggleGameMode } =
    useTicTacToeContext();

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setMoveOrder([]);
    setIsXNext(true);
  };

  const handleToggleMode = () => {
    toggleGameMode();
    handleReset();
  };

  return (
    <div className="flex items-center space-x-2 py-[325px]">
      <Info />
      <Switch
        onCheckedChange={handleToggleMode}
        checked={gameMode === "threeMoves"}
        id="game-mode"
      />
      <label htmlFor="game-mode" className="whitespace-nowrap cursor-pointer">
        Switch to {gameMode === "resetMode" ? "Three Moves Mode" : "Reset Mode"}
      </label>
    </div>
  );
};

export default Sidebar;
