import React, { Component } from "react";
import PropTypes from "prop-types";

class Propclassstudent extends Component {
  render() {
    const studentdetails = this.props.studentlist;
    return (
      <div>
        <table>
          <thead>
            <th>name</th>
            <th>regno</th>
          </thead>
          <tbody>
            {studentdetails.map((s) => {
              return (
                <tr>
                  <td>{s.name}</td>
                  <td>{s.name ? "true" : "false"}</td>
                  <td>{s.regno}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
Propclassstudent.propTypes = {
  name: PropTypes.string,
  regno: PropTypes.string,
};
export default Propclassstudent;
