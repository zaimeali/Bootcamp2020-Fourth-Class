import React, { useContext } from 'react';
import './App.css';
import ValueContext from './ValueContext';

function Child(props) {

    let salary = useContext(ValueContext);
  
    return (
        <div>
            <strong>Child</strong>
            <p>Value of Age variable in Child Component: { props.age }</p>
            <strong>Context Value</strong>
            <p>Value of Salary variable in Child Component: { salary[0] }</p>
            <button onClick={ () => { salary[1](++salary[0]) } }>Update Salary</button>
        </div>
    );
}

export default Child;
