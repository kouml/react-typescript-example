import { StrictMode } from "react";
import { Timer } from "./Timer";
import * as ReactDOMClient from "react-dom/client";

import { App } from "./App";
import { Card } from "./Card";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

const cardElement = document.getElementById("card");
const card = ReactDOMClient.createRoot(cardElement);

card.render(
  <StrictMode>
    <Card />
  </StrictMode>
);
