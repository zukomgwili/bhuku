import React, {useState} from "react";
import EditorLine from "./EditorLine";
import {ILine} from "./types";

const Editor: React.FC = () => {
    const [lines, setLines] = useState<ILine[]>([
        {
            lineNumber: 1,
            lineText: "Hello World!",
        },
    ]);

    const handleEnterKey = () => {
        setLines([...lines, {lineNumber: lines.length + 1, lineText: ""}]);
    };

    return (
        <div
            style={{
                border: "1px solid #CCC",
                height: "100vh",
                width: "100vw",
            }}
        >
            {lines.map((line) => (
                <EditorLine line={line} onEnterKey={handleEnterKey}/>
            ))}
        </div>
    );
};

export default Editor;
