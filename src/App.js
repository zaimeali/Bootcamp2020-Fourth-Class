import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';

function App() {

  let [number, setNumber] = useState(45);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from App.js</h1>
        <p>Value in App Component: { number }</p>
        <button onClick={() => { setNumber(++number) }}>Update Number</button>
        <Parent num={ number }></Parent>
      </header>
    </div>
  );
}

export default App;
