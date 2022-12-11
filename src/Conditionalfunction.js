import React, { useState } from "react";

function Conditionalfunction() {
  const [buttonclick, setbuttonclick] = useState();

  return (
    <div>
      <button
        onClick={() => {
          setbuttonclick("first");
        }}
      >
        first
      </button>
      <button
        onClick={() => {
          setbuttonclick("second");
        }}
      >
        second
      </button>

      {buttonclick === "first" ? (
        <First />
      ) : buttonclick === "second" ? (
        <Second />
      ) : (
        <Display />
      )}
    </div>
  );
}

const First = () => {
  return <div>the first button clicked</div>;
};
const Second = () => {
  return <div>the Second button clicked</div>;
};
const Display = () => {
  return <div>select one option</div>;
};

export default Conditionalfunction;
