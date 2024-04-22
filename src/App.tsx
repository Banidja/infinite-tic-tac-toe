import Board from "./components/Board";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex w-full h-screen gap-20">
      <div className="flex flex-col w-full items-center mt-20">
        <Header />
        <Board />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;
