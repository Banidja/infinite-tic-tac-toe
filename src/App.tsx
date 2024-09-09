import Board from "./components/Board";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex flex-col lg:flex-row w-full h-screen overflow-auto">
      <div className="flex flex-col items-center justify-center flex-1 w-full lg:w-auto lg:mr-2">
        <Header />
        <Board />
      </div>
      <div className="w-full lg:w-80 lg:fixed lg:right-0 lg:top-0 lg:h-full flex justify-center items-center lg:justify-start lg:items-start">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
