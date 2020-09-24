import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
//import Student from "../Components/Student";
//import StateStudent from "../Components/StateStudent";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
// added the functional 1st compnent car---
//comments

// function Car() {
//   return <h1> this is from component Car1 </h1>;
// }
// ReactDOM.render(<Car />, document.getElementById("root"));
// // added the functional 2nd compnent car2---
// function Car2() {
//   return <h1> This is from component Car2 </h1>;
// }
// ReactDOM.render(<Car2 />, document.getElementById("root"));
// ReactDOM.render(
//   <Student name="Balram" rollno={101 + 3} />,
//   document.getElementById("root")
// );
//ReactDOM.render(<StateStudent />, document.getElementById("root"));
