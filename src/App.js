import axios from "axios";
import React, { useState } from "react";
const BaseUrl = "https://jsonplaceholder.typicode.com/users/1";
const App = () => {
  const [userdata, setuserdata] = useState([]);
  const getdata = () => {
    console.log("getting data");
    axios.get(BaseUrl).then((res) => {
        console.log(res.data);
        setuserdata(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        console.log("always exectes");
      });
  };
  return (
    <div>
      <h3>Welcome to axios</h3>
      <h1>{userdata.name}</h1>
      <p>{userdata.id}</p>
      <button onClick={getdata}>Get Data</button>
    </div>
  );
};
export default App;
