import create from "zustand";
import { XAndO } from "../types";

const storageKey = "score";

interface ScoreState {
  scores: { X: number; O: number };
  increaseScore: (player: XAndO) => void;
}

const loadFromStorage = () => {
  const savedScores = localStorage.getItem(storageKey);
  return savedScores ? JSON.parse(savedScores) : { X: 0, O: 0 };
};

const useScoreStore = create<ScoreState>((set) => ({
  scores: loadFromStorage(),
  increaseScore: (player: XAndO) =>
    set((state) => {
      const newScores = { ...state.scores, [player]: state.scores[player] + 1 };
      localStorage.setItem(storageKey, JSON.stringify(newScores));
      return { scores: newScores };
    }),
}));

export default useScoreStore;
