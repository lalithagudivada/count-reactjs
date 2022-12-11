import react, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import CC from "./cc";
import Conditionalfunction from "./Conditionalfunction";
import Conditionalrenderclass from "./Conditionalrenderclass";
import Propsclass from "./Propsclass";
import Studentlistfunction from "./Studentlistfunction";
import Trailclasscount from "./Trailclasscount";
import Trailfunctioncount from "./Trailfunctioncount";
import Form from "./Form";
import App from "./App";
import Formbootstrap from "./Formbootstrap";
ReactDOM.render(
  <div>
    {/* <center> */}
    {/* <CC /> */}
    {/* <Trailfunctioncount /> */}
    {/* <Trailclasscount /> */}
    {/* <Propsclass /> */}
    {/* <Studentlistfunction /> */}
    {/* <Conditionalfunction /> */}
    {/* <Conditionalrenderclass /> */}
    <BrowserRouter>
      {/* <Form /> */}
      {/* <App /> */}
      <Conditionalfunction />
      {/* <Formbootstrap /> */}
    </BrowserRouter>
    {/* </center> */}
  </div>,
  document.getElementById("root")
);
