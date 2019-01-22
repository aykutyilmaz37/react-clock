import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString()
    };
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
      date: new Date().toLocaleDateString()
    });
  }
  render() {
    return (
      <div className="clock-container">
        <div className="inner">
          <div className="time">
            <div className="clock">{this.state.time}</div>
            <div className="date">{this.state.date}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Clock;
