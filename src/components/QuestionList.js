import React, { Component } from "react";
import Question from "./Question";

export default class QuestionList extends Component {
  render() {
    const { questions, current } = this.props;

    return (
      <div>
        {questions.map(question => {
          if (question.id === current) {
            return (
              <Question {...this.props} question={question} key={question.id} />
            );
          }
        })}
      </div>
    );
  }
}
