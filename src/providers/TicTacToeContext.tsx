import { ReactNode, createContext, useContext, useState } from "react";
import { XAndO } from "../types";

interface TicTacToeContextType {
  isXNext: boolean;
  moveOrder: Array<number>;
  squares: Array<XAndO | null>;
  setIsXNext: (isXNext: boolean) => void;
  setMoveOrder: (moveOrder: Array<number>) => void;
  setSquares: (squares: Array<XAndO | null>) => void;
}

const TicTacToeContext = createContext<TicTacToeContextType | undefined>(
  undefined
);

export function TicTacToeProvider({ children }: { children: ReactNode }) {
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [moveOrder, setMoveOrder] = useState<Array<number>>([]);
  const [squares, setSquares] = useState<Array<XAndO | null>>(
    Array(9).fill(null)
  );

  return (
    <TicTacToeContext.Provider
      value={{
        isXNext,
        moveOrder,
        squares,
        setIsXNext,
        setMoveOrder,
        setSquares,
      }}
    >
      {children}
    </TicTacToeContext.Provider>
  );
}
export function useTicTacToeContext() {
  const context = useContext(TicTacToeContext);
  if (context === undefined)
    throw new Error(
      "useTicTacToeContext must be used within a TicTacToeProvider"
    );
  return context;
}
