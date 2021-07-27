import React from "react";
import { render } from "react-dom";
import HTMLEditor from "./HTMLEditor";
import "./style.css";

const App: React.FC = () => {
  return (
    <div>
      <HTMLEditor />
    </div>
  );
};

render(<App />, document.getElementById("root"));
