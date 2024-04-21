import useScoreStore from "../lib/store";

const Score = () => {
  const { scores } = useScoreStore();
  return (
    <div>
      <p>X Score: {scores.X}</p>
      <p>O Score: {scores.O}</p>
    </div>
  );
};

export default Score;
