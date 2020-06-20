import React from 'react';
import './App.css';

function Child(props) {
  return (
    <div>
        <h3>Child</h3>
        <p>Value in Child Component: { props.num }</p>
    </div>
  );
}

export default Child;
