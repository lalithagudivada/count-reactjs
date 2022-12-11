import React, { useState } from "react";

const Form = () => {
  const [named, setname] = useState("");
  const [stdname, setregno] = useState("");
  const [hobbie, sethobbie] = useState("");

  const namechange = (e) => {
    setname(e.target.value);
  };
  const passwordChange = (e) => {
    setregno(e.target.value);
  };
  const hobbiechange = (e) => {
    sethobbie(e.target.value);
  };
  const Submit = () => {};
  return (
    <div>
      <form>
        <div>
          <input type="text" name="named" value={named} onChange={namechange} />
        </div>
        <div>
          <input
            type="text"
            name="stdname"
            value={stdname}
            onChange={passwordChange}
            placeholder="password"
          />
        </div>
        <div>
          <input
            type="checkbox"
            name="hobbie"
            value={hobbie}
            onChange={hobbiechange}
          />
        </div>
        <div>
          <button onClick={Submit}>submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
