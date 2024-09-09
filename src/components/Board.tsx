import { calculateWinner } from "../lib/calculateWinner";
import { resetFilledLines } from "../lib/resetFilledLines";
import useScoreStore from "../lib/store";
import { useTicTacToeContext } from "../providers/TicTacToeContext";
import { XAndO } from "../types";
import Score from "./Score";
import Square from "./Square";

const Board = () => {
  const {
    isXNext,
    moveOrder,
    gameMode,
    squares,
    setIsXNext,
    setMoveOrder,
    setSquares,
    handleNextStarter,
  } = useTicTacToeContext();

  const { increaseScore, restartScore } = useScoreStore();

  const handleMoveOrder = (
    newSquares: Array<XAndO | null>,
    player: XAndO
  ): void => {
    if (moveOrder.length === 7) {
      const indexToRemove = moveOrder.findIndex(
        (ind) => squares[ind] === player
      );

      if (indexToRemove !== -1) {
        newSquares[moveOrder[indexToRemove]] = null;
        moveOrder.splice(indexToRemove, 1);
        setSquares(newSquares);
      }
    } else setSquares(newSquares);
  };

  const handleGameModes = (
    newSquares: Array<XAndO | null>,
    player: XAndO,
    index: number
  ): void => {
    if (gameMode === "resetMode") setSquares(resetFilledLines(newSquares));
    else {
      moveOrder.push(index);
      handleMoveOrder(newSquares, player);
    }
  };

  const handleSquareClick = (index: number): void => {
    if (squares[index]) return;

    const newSquares = [...squares] as Array<XAndO | null>;
    const currentPlayer: XAndO = isXNext ? "X" : "O";
    newSquares[index] = currentPlayer;

    handleGameModes(newSquares, currentPlayer, index);

    setIsXNext(!isXNext);

    if (calculateWinner(newSquares)) handleReset(currentPlayer);
  };

  const handleReset = (player?: XAndO): void => {
    if (player) increaseScore(player);
    setSquares(Array(9).fill(null));
    setMoveOrder([]);
    setIsXNext(true);
    handleNextStarter();
  };

  return (
    <div className="flex flex-col items-start gap-6">
      <div className="flex w-full justify-end">
        <button onClick={() => handleReset()} className="text-2xl font-bold">
          Reset Game
        </button>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {squares.map((value, index) => (
          <Square
            key={index}
            value={value}
            onClick={() => handleSquareClick(index)}
          />
        ))}
      </div>
      <div className="flex w-full justify-between">
        <Score />
        <button onClick={restartScore} className="text-2xl font-bold">
          Reset Score
        </button>
      </div>
    </div>
  );
};

export default Board;
