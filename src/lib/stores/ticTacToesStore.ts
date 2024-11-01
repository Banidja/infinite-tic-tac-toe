import { create } from "zustand";
import { GameMode, XAndO } from "../../types";

interface TicTacToeState {
  isXNext: boolean;
  moveOrder: Array<number>;
  squares: Array<XAndO | null>;
  gameMode: GameMode;
  setIsXNext: (isXNext: boolean) => void;
  setMoveOrder: (moveOrder: Array<number>) => void;
  setSquares: (squares: Array<XAndO | null>) => void;
  toggleGameMode: () => void;
  handleNextStarter: () => void;
}

const useTicTacToeStore = create<TicTacToeState>((set) => ({
  isXNext: true,
  moveOrder: [],
  squares: Array(9).fill(null),
  gameMode: "threeMoves",
  setIsXNext: (isXNext) => set({ isXNext }),
  setMoveOrder: (moveOrder) => set({ moveOrder }),
  setSquares: (squares) => set({ squares }),
  toggleGameMode: () =>
    set((state) => ({
      gameMode: state.gameMode === "threeMoves" ? "resetMode" : "threeMoves",
    })),
  handleNextStarter: () => set((state) => ({ isXNext: !state.isXNext })),
}));

export default useTicTacToeStore;
