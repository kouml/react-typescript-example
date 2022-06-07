import { StrictMode } from "react";
import { Timer } from "./Timer";
import * as ReactDOMClient from "react-dom/client";

import { App } from "./App";
import { VocabCard } from "./VocabCard";
import { AnswerCard } from "./AnswerCard";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

const cardElement = document.getElementById("card");
const card = ReactDOMClient.createRoot(cardElement);

card.render(<VocabCard />);

const answerElement = document.getElementById("answer");
const answer = ReactDOMClient.createRoot(answerElement);

answer.render(<AnswerCard />);
