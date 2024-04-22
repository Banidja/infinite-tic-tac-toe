import { useTicTacToeContext } from "../providers/TicTacToeContext";

type Props = {};

const Sidebar = (props: Props) => {
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
    <button onClick={handleToggleMode} className="text-2xl font-bold ml-4">
      {gameMode === "threeMoves"
        ? "Switch to Reset Mode"
        : "Switch to Three Moves Mode"}
    </button>
  );
};

export default Sidebar;
