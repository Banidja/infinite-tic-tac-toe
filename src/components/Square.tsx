import { XAndO } from "../types";

interface Props {
  value: XAndO | null;
  onClick: () => void;
}

const Square = ({ value, onClick }: Props) => {
  return (
    <button
      className="h-24 w-24 bg-gray-200 flex items-center justify-center rounded-md text-3xl font-bold text-gray-800 hover:bg-gray-300 focus:outline-none"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;