import React from "react";
import Studentitem from "./Studentitem";

function Studentlistfunction() {
  const students = [
    {
      name: "lalitha",
      regno: "20b01a1260",
    },
    {
      name: "lalitha devi",
      regno: "20b01a1265",
    },
  ];
  return (
    <div>
      <Studentitem studentdetails={students} />
    </div>
  );
}
export default Studentlistfunction;
