import { useState, useEffect } from "react";

export function Card() {
  const [now, setNow] = useState(new Date());
  useEffect(
    function () {
      const intervalId = setInterval(function () {
        setNow(new Date());
      }, 1000);
      return function () {
        clearInterval(intervalId);
      };
    },
    [now]
  );
  return <div className="CardContainer">{now.toString()}</div>;
}
