import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {

  let [number, setNumber] = useState(45);

  let value = 81;

  return (
    <ValueContext.Provider value={ value }>
      <div className="App">
        <header className="App-header">
          <h1>Hello from App.js</h1>
          <p>Value in Number variable in App Component: { number }</p>
          <p>Value in Value variable in App Component: { value }</p>
          <button onClick={() => { setNumber(++number) }}>Update Number</button>
          <Parent num={ number }></Parent>
        </header>
      </div>
    </ValueContext.Provider>
  );
}

export default App;
