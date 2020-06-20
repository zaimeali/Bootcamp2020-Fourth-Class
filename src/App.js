import React, { useState } from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {

  let [age, setAge] = useState(45);

  let weight = 81;

  let salary = useState(1000);

  return (
    <ValueContext.Provider value={ salary }>
      <div className="App">
        <header className="App-header">
          <h3>Hello from App.js</h3>
          <p>Value of Age variable in App Component: { age }</p>
          <p>Value of Weight variable in App Component: { weight }</p>
          <p>Value of Salary variable in App Component: { salary }</p>
          <button onClick={() => { setAge(++age) }}>Update Age</button>
          <hr />
          <Parent age={ age }></Parent>
        </header>
      </div>
    </ValueContext.Provider>
  );
}

export default App;
