import React, { useState, useRef, useEffect } from 'react';
import EditorLine from './EditorLine';
import { Line } from './types';

const Editor: React.FC = () => {
  const [lines, setLines] = useState<Line[]>([
    {
      lineNumber: 1,
      lineText: 'Hello World!'
    }
  ]);

  const handleEnterKey = () => {
    setLines([...lines, { lineNumber: lines.length + 1, lineText: '' }]);
  };

  return (
    <div
      style={{
        border: '1px solid #CCC',
        width: '100vw',
        height: '100vh'
      }}
    >
      {lines.map(line => (
        <EditorLine line={line} onEnterKey={handleEnterKey} />
      ))}
    </div>
  );
};

export default Editor;
