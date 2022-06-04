import { useState, useEffect } from "react";

export function Card() {
  const vocabs = ["Saab", "Volvo", "BMW"];
  const randomElement = vocabs[Math.floor(Math.random() * vocabs.length)];
  const [vocab, setVocab] = useState(randomElement);

  useEffect(
    function () {
      const intervalId = setInterval(function () {
        setVocab(randomElement);
      }, 2000);
      return function () {
        clearInterval(intervalId);
      };
    },
    [vocab]
  );
  return <div className="CardContainer">{vocab}</div>;
}
