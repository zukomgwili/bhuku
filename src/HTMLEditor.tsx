import React, {useEffect, useState} from "react";

interface IProps {
    onHTMLChange: (html: string) => void;
    html: string;
}

const HTMLEditor: React.FC<IProps> = ({onHTMLChange, html: htmlCode}) => {
    const [html, setHtml] = useState<string>(htmlCode);

    useEffect(() => {
        onHTMLChange(html);
    }, [html]);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setHtml(event.target.value);
    };
    return (
        <textarea style={{
            border: "1px solid #F00",
            flex: "1",
        }} onChange={handleChange} value={html}/>
    );
};

export default HTMLEditor;
