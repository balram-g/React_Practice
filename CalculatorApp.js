import React, { Component } from "react";
import Result from "./Result";
import Buttons from "./Buttons";

class CalculatorApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: ""
    };
  }
  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };
  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };
  reset = () => {
    this.setState({
      result: ""
    });
  };
  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>Calculator</h1>
          <Result result={this.state.result} />
          <Buttons onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default CalculatorApp;
