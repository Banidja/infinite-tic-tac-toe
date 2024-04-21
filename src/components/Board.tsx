import { useState } from "react";
import { XAndO } from "../types";
import { calculateWinner } from "../utils/calculateWinner";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState<Array<XAndO | null>>(
    Array(9).fill(null)
  );
  const [isXNext, setIsXNext] = useState<boolean>(true);

  const handleClick = (index: number) => {
    if (squares[index] || calculateWinner(squares)) return;

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index: number) => (
    <Square value={squares[index]} onClick={() => handleClick(index)} />
  );

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${isXNext ? "X" : "O"}`;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4">{status}</div>
      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: 9 }).map((_, i) => renderSquare(i))}
      </div>
    </div>
  );
};

export default Board;
