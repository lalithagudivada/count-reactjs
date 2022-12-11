import React, { Component } from "react";
import Propclassstudent from "./Propclassstudent";

const students = [
  {
    name: "lalitha",
    regno: "20b01a1260",
  },
  {
    name: "devi",
    regno: "20b01a1211",
  },
];

class Propsclass extends Component {
  render() {
    return (
      <div>
        <Propclassstudent studentlist={students} />
      </div>
    );
  }
}
export default Propsclass;
