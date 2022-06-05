import "./styles.css";
import { useState, useEffect } from "react";

export function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((c) => c + 0.1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Vocab App</h1>
      <h2>Seconds: {counter}</h2>;
    </div>
  );
}
