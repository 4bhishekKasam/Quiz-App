import React, { Component } from "react";
import QuestionNumber from "./components/QuestionNumber";
import QuestionList from "./components/QuestionList";
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

  render() {
    const { current, questions } = this.state;

    if (current < questions.length) {
      var display = <QuestionNumber {...this.state} />;
      var result = "";
    }

    return (
      <div className="container-fluid">
        <div className="container">
          {" "}
          <h1 className="title">MCQ Quiz</h1>
          <div className="jumbotron">
            <div className="card-body">
              {display}
              <QuestionList {...this.state} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
