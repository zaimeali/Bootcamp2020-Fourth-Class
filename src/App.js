import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {

  let [age, setAge] = useState(45);

  let weight = 81;

  return (
    <ValueContext.Provider value={ weight }>
      <div className="App">
        <header className="App-header">
          <h1>Hello from App.js</h1>
          <p>Value of Age variable in App Component: { age }</p>
          <p>Value of Weight variable in App Component: { weight }</p>
          <button onClick={() => { setAge(++age) }}>Update Age</button>
          <hr />
          <Parent age={ age }></Parent>
        </header>
      </div>
    </ValueContext.Provider>
  );
}

export default App;
