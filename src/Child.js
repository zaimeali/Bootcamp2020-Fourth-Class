import React, { useContext } from 'react';
import './App.css';
import ValueContext from './ValueContext';

function Child(props) {

    let weight = useContext(ValueContext);
  
    return (
        <div>
            <h3>Child</h3>
            <p>Value of Age variable in Child Component: { props.age }</p>
            <h4>Context Value</h4>
            <p>Value of Weight variable in Child Component: { weight }</p>
        </div>
    );
}

export default Child;
