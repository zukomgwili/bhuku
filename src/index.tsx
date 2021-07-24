import React from "react";
import { render } from "react-dom";
import Editor from "./Editor";
import "./style.css";

const App: React.FC = () => {
  return (
    <div>
      <Editor />
    </div>
  );
};

render(<App />, document.getElementById("root"));
