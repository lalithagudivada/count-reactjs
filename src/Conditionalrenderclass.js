import React, { Component } from "react";
import Conditionalrenderclass2 from "./Conditionalrenderclass2";
class Conditionalrenderclass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: null,
    };
  }

  render() {
    const Change = (name) => {
      this.setState({ buttonClicked: name });
    };
    return (
      <div>
        <button
          onClick={() => {
            Change("first");
          }}
        >
          first
        </button>
        <button
          onClick={() => {
            Change("second");
          }}
        >
          second
        </button>
        <Conditionalrenderclass2 name={this.state.buttonClicked} />
      </div>
    );
  }
}

export default Conditionalrenderclass;
