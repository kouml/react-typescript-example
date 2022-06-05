import "./styles.css";
import { useState, useEffect } from "react";

export function App() {
  const [counter, setCounter] = useState(0);

  useEffect(
    function () {
      const intervalId = setInterval(function () {
        setCounter(counter + 0.1);
      }, 100);
      return function () {
        clearInterval(intervalId);
      };
    },
    [counter]
  );

  return (
    <div className="App">
      <h1>Vocab App</h1>
      <h2>Seconds: {counter}</h2>;
    </div>
  );
}
