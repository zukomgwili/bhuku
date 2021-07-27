import React, {useEffect, useState} from "react";

const HTMLEditor: React.FC = () => {
    const [html, setHtml] = useState<string>("");
    const [lineNumbers, setLineNumbers] = useState<number[]>([]);

    const getLineNumbers = (value: string) => {
        return value.split("\n").filter((line) => line.trim() !== "").map((line, index) => index + 1);
    };

    useEffect(() => {
        if (html.trim().length === 0) {
            return;
        }
        setLineNumbers(getLineNumbers(html));
    }, [html]);

    const handleChange = (event: React.ChangeEvent<HTMLDivElement>) => {
        setHtml(event.target.innerText as string);
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

export default HTMLEditor;
