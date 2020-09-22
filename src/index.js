import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
// added the functional 1st compnent car---

function Car() {
  return <h1> this is from component Car1 </h1>;
}
ReactDOM.render(<Car />, document.getElementById("root"));
// added the functional 2nd compnent car2---
function Car2() {
  return <h1> This is from component Car2 </h1>;
}
ReactDOM.render(<Car2 />, document.getElementById("root"));
