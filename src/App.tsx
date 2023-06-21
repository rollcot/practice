import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClickCountChart from "./components/ClickCountChart";

function App() {
  const [oldCounts, setOldCounts] = useState<number[]>([]);
  const [currentCount, setCurrentCount] = useState(0);
  const counts: number[] = [...oldCounts, currentCount];

  const next = () => {
    setOldCounts((prev) => [...prev, currentCount]);
    setCurrentCount(0);
  };

  return (
    <>
      <ClickCountChart clickCounts={counts}/>
      <div className="card">
        <button onClick={() => setCurrentCount((prev) => prev + 1)}>
          count is {currentCount}
        </button>
        <button onClick={next}>
          {"next ->"} 
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + rollcot</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
