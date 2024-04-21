import Board from "./components/Board";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="flex flex-col w-full h-screen gap-20">
      <Header />
      <Board />
    </div>
  );
}

export default App;
