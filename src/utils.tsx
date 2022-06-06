export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function readVocabFromCSV(fileName: string) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.open("GET", fileName, false);
  httpRequest.send();
  return httpRequest.responseText.split("\n").map((x) => x.split(","));
}

export function readloudText(text: string) {
  var msg = new SpeechSynthesisUtterance();
  msg.lang = "zh";
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
