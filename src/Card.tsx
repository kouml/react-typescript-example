import React from "react";

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      vocab: "単語例",
      example: "例文",
      answer: "答え例",
      answer_example: "答え例文"
    };
  }

  getCSV() {
    var res = new XMLHttpRequest();
    res.open("get", "./sample.csv", true);
    res.send(null);
    var text: string = "test";
    return text;
  }

  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1
    }));
  }

  tack() {
    var random = Math.random();
    this.setState((vocab, example, answer, answer_example) => ({
      vocab: random,
      example: "refresh",
      answer: "refresh",
      answer_example: "refresh"
    }));
  }

  componentDidMount() {
    // var text = this.getCSV();
    this.interval = setInterval(() => this.tack(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="CardContainer">
        <div className="FrontCardDisplay">{this.state.vocab}</div>
        <div className="FrontCardExDisplay">{this.state.example}</div>
        <div className="BackCardDisplay">{this.state.answer}</div>
        <div className="BackCardExDisplay">{this.state.answer_example}</div>
      </div>
    );
  }
}
