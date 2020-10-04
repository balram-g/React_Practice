import React, { Component } from "react";
import Switch from "react-switch";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.showHide = this.showHide.bind(this);

    this.state = {
      time: new Date()
    };
  }

  changeName() {
    let date = new Date().toLoaleString;
    date += this.state.show === true ? "hide" : "show";
    return date;
  }
  showHide(checked) {
    const { show } = this.state;

    this.setState({ show: !show });
    this.setState({ checked });
  }

  render() {
    return (
      <div>
        <h1 style={{ backgroundColor: "lightblue" }}>Digital Clock</h1>
        <h2> {this.state.time.toLocaleTimeString()}</h2>
        <div className="container">
          <div>
            <div>
              <Switch
                id="normal-switch"
                onChange={this.showHide}
                checked={this.state.checked}
              />
              {this.state.show && (
                <div>
                  <h2> {this.state.time.toLocaleString()}</h2>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
