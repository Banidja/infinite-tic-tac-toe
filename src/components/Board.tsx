import { useState } from "react";
import { XAndO } from "../types";
import { calculateWinner } from "../utils/calculateWinner";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState<Array<XAndO | null>>(
    Array(9).fill(null)
  );
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [moveOrder, setMoveOrder] = useState<Array<number>>([]);

  const handleClick = (index: number) => {
    if (squares[index]) return;

    const newSquares = squares.slice();
    const player = isXNext ? "X" : "O";

    if (moveOrder.length === 6) {
      const currentOpMove = player === "X" ? "O" : "X";
      const indexToRemove = moveOrder.findIndex(
        (ind) => squares[ind] === currentOpMove
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
      setSquares(Array(9).fill(null));
      setMoveOrder([]);
      setIsXNext(true);
      return;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <Square value={squares[i]} onClick={() => handleClick(i)} />
        ))}
      </div>
    </div>
  );
};

export default Board;
