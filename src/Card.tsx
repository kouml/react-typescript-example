import { useState, useEffect } from "react";

function read_vocab_from_file() {
  var httpRequest = new XMLHttpRequest();
  httpRequest.open("GET", "./sample.csv", false);
  httpRequest.send();
  return httpRequest.responseText.split("\n").map((x) => x.split(","));
}

export function Card() {
  var vocabs = read_vocab_from_file();

  const [vocab, setVocab] = useState("first");
  const [answer, setAnswer] = useState("answer");
  const [isShown, setIsShown] = useState(true);

  const toggleIsShown = (event) => {
    // 👇️ toggle visibility
    setIsShown((current) => !current);
  };

  let randomIndex = () => Math.floor(Math.random() * vocabs.length);

  useEffect(
    function () {
      const intervalId = setInterval(function () {
        var index = randomIndex();
        setVocab(vocabs[index][0]);
        setAnswer(vocabs[index][1]);
      }, 2000);

      setInterval(function () {
        toggleIsShown();
      }, 1000);

      return function () {
        clearInterval(intervalId);
      };
    },
    [vocab],
    [answer]
  );

  return (
    <div className="CardContainer">
      <div className="Vocab">{vocab}</div>
      <div className="Answer" style={{ display: isShown ? "block" : "none" }}>
        {answer}
      </div>
    </div>
  );
}
