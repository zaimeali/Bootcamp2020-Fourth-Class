import React from 'react';
import './App.css';
import Child from './Child';

function Parent(props) {
  return (
    <div>
        <h4>Parent</h4>
        <hr />
        <Child age={ props.age }></Child>
    </div>
  );
}

export default Parent;
