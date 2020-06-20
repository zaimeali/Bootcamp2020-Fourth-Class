import React from 'react';
import './App.css';
import Child from './Child';

function Parent(props) {
  return (
    <div>
        <h2>Parent</h2>
        <Child num={ props.num }></Child>
    </div>
  );
}

export default Parent;
