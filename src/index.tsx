import React, {useState} from "react";
import {render} from "react-dom";
import HTMLEditor from "./HTMLEditor";
import "./style.css";
import WYSIWYGEditor from "./WYSIWYGEditor";

const App: React.FC = () => {
    const [wYSIWYGContent, setWYSIWYGContent] = useState<string>("");
    const [htmlContent, setHTMLContent] = useState<string>("");

    const handleHTMLChange = (html: string) => {
        setWYSIWYGContent(html);
    };

    const handleContentChange = (content: string) => {
        setHTMLContent(content);
    };

    return (
        <div style={{display: "flex", flexDirection: "row", width: "100vw", height: "100vh"}}>
            <HTMLEditor onHTMLChange={handleHTMLChange} html={htmlContent} />
            <WYSIWYGEditor onContentChange={handleContentChange} content={wYSIWYGContent}/>
        </div>
    );
};

render(<App/>, document.getElementById("root"));
