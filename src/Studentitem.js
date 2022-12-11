import React from "react";

function Studentitem(props) {
  const Studentdet = props.studentdetails;
  return (
    <div>
      <table>
        <thead>
          <th></th>
        </thead>
        <tbody>
          {Studentdet.map((s) => {
            return (
              <tr>
                <td>{s.name}</td>
                <td>{s.regno}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Studentitem;
