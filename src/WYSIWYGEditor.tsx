import React, {useEffect, useState} from "react";

interface IProps {
    onContentChange: (content: string) => void;
    content: string;
}

const WYSIWYGEditor: React.FC<IProps> = ({onContentChange, content: html}) => {
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        onContentChange(content);
    }, [content]);

    const handleChange = (event: React.ChangeEvent<HTMLDivElement>) => {
        setContent(event.target.innerHTML as string);
    };

    return (<div style={{
        border: "1px solid #00F",
        flex: "1",
        height: "100%",
        width: "100%",
    }}
                 contentEditable
                 onInput={handleChange}
                 dangerouslySetInnerHTML={{
                     __html: html }}
    />);
};

export default WYSIWYGEditor;
