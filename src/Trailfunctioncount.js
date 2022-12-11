import React, { useState } from "react";

function Trailfunctioncount() {
  const [count, setcount] = useState(0);
  return (
    <div>
      count :{count}
      <div>
        <button onClick={() => setcount(count + 1)}> +</button>
        <button onClick={() => setcount(count - 1)}>-</button>
      </div>
    </div>
  );
}
export default Trailfunctioncount;
