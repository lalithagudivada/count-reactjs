import React, { Component } from "react";
import First from "./First";
class Conditionalrenderclass2 extends Component {
  render() {
    if (this.props.name === "first") {
      return <First />;
    }
  }
}
export default Conditionalrenderclass2;
