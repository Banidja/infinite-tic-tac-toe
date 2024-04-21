import { calculateWinner } from "../lib/calculateWinner";
import useScoreStore from "../lib/store";
import { useTicTacToeContext } from "../providers/TicTacToeContext";
import Score from "./Score";
import Square from "./Square";

const Board = () => {
  const { isXNext, moveOrder, squares, setIsXNext, setMoveOrder, setSquares } =
    useTicTacToeContext();

  const { scores, increaseScore } = useScoreStore(); // Get the increaseScore function from the store

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

  return (
    <div className="flex flex-col items-center justify-center">
      <Score />
      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <Square value={squares[i]} onClick={() => handleClick(i)} />
        ))}
      </div>
    </div>
  );
};

export default Board;
