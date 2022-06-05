import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import { useState, useEffect } from "react";
var pinyin = require("chinese-to-pinyin");

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {}
    },
    marginAutoContainer: {
      width: 500,
      height: 80,
      display: "flex",
      backgroundColor: "gold"
    },
    marginAutoItem: {
      margin: "auto"
    },
    alignItemsAndJustifyContent: {
      width: 500,
      height: 80,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "pink"
    }
  })
);

function read_vocab_from_file() {
  var httpRequest = new XMLHttpRequest();
  httpRequest.open("GET", "./sample.csv", false);
  httpRequest.send();
  return httpRequest.responseText.split("\n").map((x) => x.split(","));
}

export function CardAlt() {
  const classes = useStyles();
  var vocabs = read_vocab_from_file();

  const [vocab, setVocab] = useState("first");
  const [answer, setAnswer] = useState("answer");
  const [pin, setPin] = useState("answer");
  const [isShown, setIsShown] = useState(false);

  const toggleIsShown = () => {
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
        setPin(pinyin(vocabs[index][1]));
      }, 2000);

      const intervalId2 = setInterval(function () {
        toggleIsShown();
        // var msg = new SpeechSynthesisUtterance();
        // msg.lang = "zh";
        // msg.text = answer;
        // window.speechSynthesis.speak(msg);
        // console.log(pinyin(msg.text));
      }, 1000);

      return function () {
        clearInterval(intervalId);
        clearInterval(intervalId2);
      };
    },
    [vocab],
    [answer],
    [pin]
  );

  return (
    <Box className={classes.root}>
      <Card>
        <CardContent>
          <Typography variant="h3">{vocab}</Typography>
        </CardContent>
        <CardContent>
          <Typography
            variant="h3"
            style={{ display: isShown ? "block" : "none" }}
          >
            {answer}
          </Typography>
          <Typography
            variant="h3"
            style={{ display: isShown ? "block" : "none" }}
          >
            {pin}
          </Typography>
        </CardContent>{" "}
      </Card>
    </Box>
  );
}
