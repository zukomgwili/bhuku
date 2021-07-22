import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Editor from './Editor';

interface AppProps {}
interface AppState {
  name: string;
}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <Editor />
    </div>
  );
};

render(<App />, document.getElementById('root'));
