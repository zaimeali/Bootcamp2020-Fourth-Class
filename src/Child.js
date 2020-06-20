import React, { useContext } from 'react';
import './App.css';
import ValueContext from './ValueContext';

function Child(props) {

    let value = useContext(ValueContext);
  
    return (
        <div>
            <h3>Child</h3>
            <p>Value in Number variable in Child Component: { props.num }</p>
            <h4>Context Value</h4>
            <p>Value in Value variable in Child Component: { value }</p>
        </div>
    );
}

export default Child;
