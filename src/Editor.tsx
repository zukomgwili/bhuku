import React, {useEffect, useState} from "react";

const Editor: React.FC = () => {
    const [text, setText] = useState<string>("");
    const [lineNumbers, setLineNumbers] = useState<number[]>([]);

    const getLineNumbers = (value: string) => {
        return value.split("\n").filter((line) => line.trim() !== "").map((line, index) => index + 1);
    };

    useEffect(() => {
        if (text.trim().length === 0) {
            return;
        }
        setLineNumbers(getLineNumbers(text));
    }, [text]);

    const handleChange = (event: React.ChangeEvent<HTMLDivElement>) => {
        setText(event.target.innerText as string);
    };

    return (
        <div
            style={{
                border: "1px solid #CCC",
                display: "flex",
                flexDirection: "row",
                height: "100vh",
                width: "100vw",
            }}
        >
            <div style={{
                flex: "10%",
            }}>{lineNumbers.map((lineNumber, index) => (<div key={index}>{lineNumber}</div>))}</div>
            <div style={{
                flex: "90%",
            }} contentEditable onInput={handleChange}>
            </div>
        </div>
    );
};

export default Editor;
