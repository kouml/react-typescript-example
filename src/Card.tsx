import { useState, useEffect } from "react";

function read_vocab_from_file() {
  var httpRequest = new XMLHttpRequest();
  httpRequest.open("GET", "./sample.csv", false);
  httpRequest.send();
  return httpRequest.responseText.split("¥n")[0].split(",");
}

export function Card() {
  var vocabs = read_vocab_from_file();

  const [vocab, setVocab] = useState("first");
  const [answer, setAnswer] = useState("answer");
  let randomIndex = () => Math.floor(Math.random() * vocabs.length);

  useEffect(
    function () {
      const intervalId = setInterval(function () {
        setVocab(vocabs[randomIndex()]);
      }, 2000);
      return function () {
        clearInterval(intervalId);
      };
    },
    [vocab]
  );

  useEffect(
    function () {
      const intervalId = setInterval(function () {
        setAnswer(vocabs[randomIndex()]);
      }, 2000);
      return function () {
        clearInterval(intervalId);
      };
    },
    [answer]
  );
  return (
    <div className="CardContainer">
      <div className="Vocab">{vocab}</div>
      <div className="Answer">{answer}</div>
    </div>
  );
}
