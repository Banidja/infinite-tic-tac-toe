import { calculateWinner } from "../lib/calculateWinner";
import useScoreStore from "../lib/store";
import { useTicTacToeContext } from "../providers/TicTacToeContext";
import Score from "./Score";
import Square from "./Square";

const Board = () => {
  const { isXNext, moveOrder, squares, setIsXNext, setMoveOrder, setSquares } =
    useTicTacToeContext();

  const { increaseScore, restartScore } = useScoreStore();

  const handleClick = (index: number) => {
    if (squares[index]) return;

    const newSquares = squares.slice();
    const player = isXNext ? "X" : "O";

    if (moveOrder.length === 6) {
      const indexToRemove = moveOrder.findIndex(
        (ind) => squares[ind] === player
      );
      if (indexToRemove !== -1) {
        newSquares[moveOrder[indexToRemove]] = null;
        moveOrder.splice(indexToRemove, 1);
      }
    }

    newSquares[index] = player;
    setSquares(newSquares);
    setIsXNext(!isXNext);
    moveOrder.push(index);

    const winner = calculateWinner(newSquares);
    if (winner) {
      increaseScore(player);
      setSquares(Array(9).fill(null));
      setMoveOrder([]);
      setIsXNext(true);
      return;
    }
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setMoveOrder([]);
    setIsXNext(true);
  };

  return (
    <div className="flex flex-col items-start gap-6">
      <div className="flex w-full justify-end">
        <button onClick={handleReset} className="text-2xl font-bold">
          reset game
        </button>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <Square value={squares[i]} onClick={() => handleClick(i)} />
        ))}
      </div>
      <div className="flex w-full justify-between">
        <Score />
        <button onClick={restartScore} className="text-2xl font-bold">
          reset score
        </button>
      </div>
    </div>
  );
};

export default Board;
