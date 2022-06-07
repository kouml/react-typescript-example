import "./styles.css";
import { useState, useEffect } from "react";

export function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((c: number) => c + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="Counter">{counter} sec</div>
      <h1>Vocab App</h1>
    </div>
  );
}
