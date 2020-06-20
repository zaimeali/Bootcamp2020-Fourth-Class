import React, { useReducer } from 'react';
import './App.css';
import numberReducer from './numberReducer';

function Child2(props) {
  
    let [state, dispatch] = useReducer(numberReducer, 52);

    // type because we have action.type in reducer function in numberReducer
    // if want to pass more values in action:      dispatch({ type: "INCREMENT", val: 34 }); 
    // then in reducer action.val

    return (
        <div>
            <strong>Child 2</strong>
            <p>Value of Reducer in Child 2 Component: { state } </p>

            <button onClick={() => { dispatch({ type: "INCREMENT" }); }}>Increment</button>
            <button onClick={() => { dispatch({ type: "DECREMENT" }); }}>Decrement</button>
        </div>
    );
}

export default Child2;
