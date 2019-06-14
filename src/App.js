import React, { Component } from "react";
import QuestionNumber from "./components/QuestionNumber";
import QuestionList from "./components/QuestionList";
import Result from "./components/Result";
import "./App.css";
import data from "./data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { questions: data.questions, score: 0, current: 1 };
    //  this.submitClick = this.submitClick.bind(this);
  }

  componentWillMount() {
    console.log(this.state.questions);
  }

  setScore(score) {
    this.setState({ score });
  }

  setCurrent(current) {
    this.setState({ current });
  }

  newQuiz(e) {
    e.preventDefault();
    this.setState({
      score: 0,
      current: 1
    });
  }

  render() {
    const { current, questions } = this.state;
    var display, result;

    if (current < questions.length) {
      display = <QuestionNumber {...this.state} />;
      result = "";
    } else {
      display = "";
      result = <Result {...this.state} newQuiz={this.newQuiz.bind(this)} />;
    }

    return (
      <div className="container-fluid">
        <div className="container">
          {" "}
          <h1 className="title">MCQ Quiz</h1>
          <div className="jumbotron">
            <div className="card-body">
              {display}
              <QuestionList
                {...this.state}
                setScore={this.setScore.bind(this)}
                setCurrent={this.setCurrent.bind(this)}
              />
              {result}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
