import useTicTacToeStore from "../lib/stores/ticTacToesStore";

const Header = () => {
  const { isXNext } = useTicTacToeStore();

  return (
    <div className="w-full justify-center flex my-10">
      <p className="text-4xl font-semibold">{isXNext ? "X" : "O"}</p>
    </div>
  );
};

export default Header;
