const InfoContent = () => {
  return (
    <div className="flex flex-col items-start gap-2 px-2 py-3 w-[200px]">
      <div className="flex flex-col w-full">
        <p className="font-bold text-md">Three Moves Mode</p>
        <span>
          Each player can have only three marks on the board simultaneously.
          <br />
          Making a fourth mark removes the oldest mark from the board.
        </span>
      </div>
      <div className="flex flex-col w-full">
        <p className="font-bold text-md">Reset Mode</p>
        <span>
          If any row, column, or diagonal is filled and doesn't result in a win,
          those spaces are cleared.
        </span>
      </div>
    </div>
  );
};

export default InfoContent;
