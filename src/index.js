import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
  { id: "1", message: "salamakeikum", likesCount: 12 },
  { id: "2", message: "$NOK is goos", likesCount: 11 },
  { id: "3", message: "go to the moon", likesCount: 11 },
];

let dialogs = [
  { id: "1", name: "Dimych" },
  { id: "2", name: "Sawka" },
  { id: "3", name: "Olga" },
  { id: "4", name: "Alex" },
];

let messages = [
  { id: "1", message: "privet" },
  { id: "2", message: "yoyo" },
  { id: "3", message: "aloss" },
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);
