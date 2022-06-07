export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function readVocabFromCSV(fileName: string) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.open("GET", fileName, false);
  httpRequest.send();
  return httpRequest.responseText.split("\n").map((x) => x.split(","));
}

export async function readloudText(text: string) {
  var speech = new SpeechSynthesisUtterance();
  speech.lang = "zh";
  speech.text = text;
  // window.speechSynthesis.speak(msg);
  speechSynthesis.speak(speech);
  return new Promise((resolve) => {
    speech.onend = resolve;
  });

  // speech.onend = function (event) {
  //   console.log(
  //     "Utterance has finished being spoken after " +
  //       event.elapsedTime +
  //       " seconds."
  //   );
  // };
}
