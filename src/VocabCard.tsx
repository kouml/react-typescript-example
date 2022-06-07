import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Checkbox
} from "@material-ui/core";
import VolumeMuteIcon from "@mui/icons-material/VolumeMute";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import { sleep, readVocabFromCSV, readloudText } from "./utils";

import { createStyles, makeStyles } from "@material-ui/styles";
import { useState, useEffect, useContext, React } from "react";

import { AnswerCard } from "./AnswerCard";

var pinyin = require("chinese-to-pinyin");
var vocabs = readVocabFromCSV("./sample.csv");

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {}
    }
  })
);

export function VocabCard() {
  const classes = useStyles();

  const [vocab, setVocab] = useState("Hello");
  const [answer, setAnswer] = useState("你好");
  const [pin, setPin] = useState(pinyin("你好"));
  const [isShown, setIsShown] = useState(false);
  const [play, setPlay] = useState("PLAYING");
  const [isMute, setIsMute] = useState(false);
  const [next, setNext] = useState(false);

  const toggleIsShown = () => {
    setIsShown((current) => !current);
  };

  let randomIndex = () => Math.floor(Math.random() * vocabs.length);

  useEffect(() => {
    var intervalId;
    if (next) {
      intervalId = setInterval(async () => {
        var index = randomIndex();
        if (play == "PLAYING") {
          // invisible answer
          toggleIsShown();
          setVocab(vocabs[index][0]);
          await sleep(8000);
          // visible answer
          toggleIsShown();
          if (isMute === false) {
            setAnswer(vocabs[index][1]);
            setPin(pinyin(vocabs[index][1]));
            await readloudText(vocabs[index][1]);
          }
        }
      }, 14000);
    } else {
      intervalId = setInterval(async () => {
        var index = randomIndex();
        if (play == "PLAYING") {
          // invisible answer
          toggleIsShown();
          setVocab(vocabs[index][0]);
          await sleep(8000);
          // visible answer
          toggleIsShown();
          if (isMute === false) {
            setAnswer(vocabs[index][1]);
            setPin(pinyin(vocabs[index][1]));
            await readloudText(vocabs[index][1]);
          }
        }
      }, 14000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [play, isMute, next]);

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
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography
            variant="h3"
            style={{ visibility: isShown ? "hidden" : "visible" }}
          >
            {pin}
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <Button
          onClick={() => {
            setNext((current) => true);
            console.log(next);
          }}
        >
          Next Button
        </Button>
      </Card>
      <Card>
        <Button
          onClick={() => {
            setPlay((current) =>
              current == "PLAYING" ? "PAUSING" : "PLAYING"
            );
            console.log(play);
          }}
        >
          State:{play}
        </Button>
        <Checkbox
          icon={<VolumeUpIcon />}
          checkedIcon={<VolumeMuteIcon />}
          checked={isMute}
          onClick={() => {
            setIsMute((current) => !current);
          }}
        />
      </Card>
    </Box>
  );
}
