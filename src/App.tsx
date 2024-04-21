import Board from "./components/Board";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex w-full h-screen gap-20">
      <div className="flex flex-col w-full items-center mt-20">
        <Header />
        <Board />
      </div>
    </div>
  );
}

export default App;
