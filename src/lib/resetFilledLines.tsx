import { XAndO } from "../types";

export const resetFilledLines = (
  squares: (XAndO | null)[]
): (XAndO | null)[] => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const newSquares = [...squares];

  lines.forEach((line) => {
    const [a, b, c] = line;
    if (squares[a] !== null && squares[b] !== null && squares[c] !== null) {
      if (!(squares[a] === squares[b] && squares[b] === squares[c])) {
        newSquares[a] = null;
        newSquares[b] = null;
        newSquares[c] = null;
      }
    }
  });

  return newSquares;
};
