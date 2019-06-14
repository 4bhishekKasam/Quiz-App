import React, { Component } from "react";

export default class Result extends Component {
  render() {
    const { score, questions, current, newQuiz } = this.props;
    let result;

    if (current > questions.length) {
      if (score > 4) {
        result = (
          <div className="alert alert-success">
            <h2>Congratulations !!!</h2>
            <h3>
              You have scored {score} out of {questions.length}{" "}
            </h3>
          </div>
        );
      } else {
        result = (
          <div className="alert alert-danger">
            <h2>Failed</h2>
            <h3>
              You have scored {score} out of {questions.length}{" "}
            </h3>
          </div>
        );
      }
    }

    return (
      <div className="container">
        {result}
        {current > questions.length && (
          <button className="btn btn-primary" onClick={newQuiz}>
            Retry Quiz
          </button>
        )}
      </div>
    );
  }
}
