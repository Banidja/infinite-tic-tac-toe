import Board from "./components/Board";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full">
        <Header />
        <Board />
      </div>
      <div className="w-96 h-full fixed right-0 top-0">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
