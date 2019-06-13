import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div className="container">
        <button className="btn btn-primary" onClick={this.props.buttonClick}>
          Click me{" "}
        </button>
      </div>
    );
  }
}
