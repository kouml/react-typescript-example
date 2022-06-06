import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";
import { sleep, read_vocab_from_file } from "./utils";

import { createStyles, makeStyles } from "@material-ui/styles";
import { useState, useEffect, React } from "react";

var pinyin = require("chinese-to-pinyin");
var vocabs = read_vocab_from_file();

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

export function VocabCard() {
  const classes = useStyles();

  const [vocab, setVocab] = useState("Hello");
  const [answer, setAnswer] = useState("你好");
  const [pin, setPin] = useState(pinyin("你好"));
  const [isShown, setIsShown] = useState(false);
  const [play, setPlay] = useState("再生");

  const toggleIsShown = () => {
    setIsShown((current) => !current);
  };

  let randomIndex = () => Math.floor(Math.random() * vocabs.length);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      var index = randomIndex();
      console.log(play);
      if (play == "停止") {
        // invisible answer
        toggleIsShown();
        setVocab(vocabs[index][0]);
        await sleep(3000);
        // visible answer
        toggleIsShown();
        setAnswer(vocabs[index][1]);
        setPin(pinyin(vocabs[index][1]));
        var msg = new SpeechSynthesisUtterance();
        msg.lang = "zh";
        msg.text = vocabs[index][1];
        window.speechSynthesis.speak(msg);
        console.log(pinyin(msg.text));
      }
    }, 6000);

    // document.addEventListener("keydown", function (e) {
    //   if (e.key === "Enter" || e.key === "Space") {
    //     setIsStopped((current) => !current);
    //     console.log(isStopped);
    //   }
    // });

    return () => {
      clearInterval(intervalId);
    };
  }, [play]);

  return (
    <Box className={classes.root}>
      <Card>
        <CardContent>
          <Typography variant="h3">{vocab}</Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography
            variant="h3"
            style={{ visibility: isShown ? "hidden" : "visible" }}
          >
            {answer}
          </Typography>
        </CardContent>{" "}
      </Card>
      <Card>
        <CardContent>
          <Typography
            variant="h3"
            style={{ visibility: isShown ? "hidden" : "visible" }}
          >
            {pin}
          </Typography>
        </CardContent>{" "}
      </Card>
      <Card>
        <Button
          onClick={() => {
            setPlay((current) => (current == "再生" ? "停止" : "再生"));
          }}
        >
          {play}
        </Button>
      </Card>
    </Box>
  );
}
