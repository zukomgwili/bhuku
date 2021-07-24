import React, { useEffect, useRef, useState } from "react";
import {ILine} from "./types";

interface IProps {
  line: ILine;
  onEnterKey: () => void;
}

const EditorLine: React.FC<IProps> = (props) => {
  const { onEnterKey } = props;
  const [line, setLine] = useState<ILine>(props.line);
  const editor = useRef(null);

  useEffect(() => {
    if (editor) {
      (editor.current as unknown as HTMLDivElement)?.focus();
    }
  }, []);

  const { lineNumber, lineText } = line;

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onEnterKey();
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ flex: "5%", background: "red" }}>{lineNumber}</div>
      <div
        style={{ flex: "95%" }}
        contentEditable
        onKeyPress={handleKeyPress}
        ref={editor}
      >
        {lineText}
      </div>
    </div>
  );
};

export default EditorLine;
