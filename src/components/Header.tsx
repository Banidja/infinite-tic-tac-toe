import { useTicTacToeContext } from "../providers/TicTacToeContext";

const Header = () => {
  const { isXNext } = useTicTacToeContext();

  return (
    <div className="w-full justify-center flex my-10">
      <p className="text-4xl font-semibold">{isXNext ? "X" : "O"}</p>
    </div>
  );
};

export default Header;
