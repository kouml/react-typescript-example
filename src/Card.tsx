import React from "react";
import axios from "axios";

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

    res.onload = function () {
      // alert(res.responseText);
      //      alert();
      // convertCSVtoArray(res.responseText);
    };
    res.onerror = function () {
      // do something
    };
  }

  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1
    }));
  }

  tack() {
    this.setState((vocab, example, answer, answer_example) => ({
      vocab: "リフレッシュ",
      example: "リフレッシュ",
      answer: "リフレッシュ",
      answer_example: "リフレッシュ"
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tack(), 1000);
    this.getCSV(); //最初に実行される

    // this.state = {
    //   vocab: "1リフレッシュ",
    //   example: "1リフレッシュ",
    //   answer: "1リフレッシュ",
    //   answer_example: "1リフレッシュ"
    // };
    // axios.get("http://localhost:3001/users").then((results) => {
    //   console.log(results);
    //   this.setState({ users: results.data });
    // });
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
