import { useState, useEffect } from "react";
var pinyin = require("chinese-to-pinyin");

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
  const [isShown, setIsShown] = useState(false);

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

      const intervalId2 = setInterval(function () {
        toggleIsShown();
        var msg = new SpeechSynthesisUtterance();
        msg.lang = "zh";
        msg.text = vocabs[randomIndex()][1];
        window.speechSynthesis.speak(msg);
        console.log(pinyin(msg.text));
      }, 1000);

      return function () {
        clearInterval(intervalId);
        clearInterval(intervalId2);
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
