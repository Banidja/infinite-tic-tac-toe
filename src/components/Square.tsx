import { XAndO } from "../types";

interface Props {
  value: XAndO | null;
  onClick: () => void;
}

const Square = ({ value, onClick }: Props) => {
  return (
    <button
      className="size-32 bg-gray-200 flex items-center justify-center rounded-md text-3xl font-bold text-gray-800 hover:bg-gray-300 focus:outline-none transition-colors duration-200"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
