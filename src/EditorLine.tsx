import React, { useState, useRef, useEffect } from 'react';

type Props = {
  line: Line;
  onEnterKey: () => void;
};

const EditorLine: React.FC<Props> = props => {
  const { onEnterKey } = props;
  const [line, setLine] = useState<Line>(props.line);
  const editor = useRef(null);

  useEffect(() => {
    if (editor) {
      editor.current.focus();
    }
  }, []);

  const { lineNumber, lineText } = line;

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.code === 'Enter') {
      event.preventDefault();
      onEnterKey();
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ flex: '5%', background: 'red' }}>{lineNumber}</div>
      <div
        style={{ flex: '95%' }}
        contenteditable="true"
        onKeyPress={handleKeyPress}
        ref={editor}
      >
        {lineText}
      </div>
    </div>
  );
};

export default EditorLine;
