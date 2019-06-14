import React, { Component } from "react";

export default class QuestionNumber extends Component {
  render() {
    return (
      <div>
        <h4>
          <p className="card">
            {" "}
            Question <b>{this.props.current}</b> out of{" "}
            <b>{this.props.questions.length}</b>
          </p>
        </h4>
      </div>
    );
  }
}
