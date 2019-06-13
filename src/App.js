import React, { Component } from "react";
//import Button from "./components/Button";
//import Card from "./components/Card";
import "./App.css";
import data from "./data";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { questions: data.questions };
    //  this.submitClick = this.submitClick.bind(this);
  }

  componentWillMount() {
    console.log(this.state.questions);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          {" "}
          <h1 className="title">MCQ Quiz</h1>
          <div className="card">
            <div className="card-body" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
