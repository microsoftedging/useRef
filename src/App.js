import './App.css';
import Cookie from './assets/cookie.png';
import React from 'react';

function App() {

  return (
    <div className="app">
      <img alt="cookie" className="spin" src={Cookie} draggable="false" />
      <h1>Click the Cookie</h1>
      <Cookie />
    </div>
  );
}

export default App;