import React from 'react';
import './App.css';
import Child from './Child';
import Child2 from './Child2';

function Parent(props) {
  return (
    <div>
        <hr />
        <h4>Parent</h4>
        <hr />
        <Child age={ props.age }></Child>
        <hr />
        <Child2></Child2>
    </div>
  );
}

export default Parent;
