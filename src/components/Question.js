import React, { Component } from "react";

export default class Question extends Component {
  handleChange(e) {}

  render() {
    const { question } = this.props;
    return (
      <div className="container">
        <h3>
          {question.id}. {question.text}
        </h3>
        <ul className="list-group">
          {question.choices.map(choice => {
            return (
              <li className="list-group-item" key={choice.id}>
                <input
                  onChange={this.handleChange.bind(this)}
                  className="choice"
                  type="radio"
                  name={question.id}
                  value={choice.id}
                />{" "}
                {choice.text}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
