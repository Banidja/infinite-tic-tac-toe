import useScoreStore from "../lib/stores/scoreStore";

const Score = () => {
  const { scores } = useScoreStore();
  return (
    <div className="flex items-center gap-10 text-2xl font-bold">
      <p>X {scores.X}</p>
      <p>O {scores.O}</p>
    </div>
  );
};

export default Score;
