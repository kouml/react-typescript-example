export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function read_vocab_from_file() {
  var httpRequest = new XMLHttpRequest();
  httpRequest.open("GET", "./sample.csv", false);
  httpRequest.send();
  return httpRequest.responseText.split("\n").map((x) => x.split(","));
}
