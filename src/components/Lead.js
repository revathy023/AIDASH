import React from "react";
import ReactDOM from "react-dom";

import { Intro } from "./Intro.js";
import { Why } from "./Why.js";

class Lead extends React.Component {
  render() {
    return (
      <div>
        <Intro />
        <Why />
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Lead />, rootElement);
