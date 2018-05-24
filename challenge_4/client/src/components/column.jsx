import React, {Component} from 'react';
import Cell from './cell.jsx';


export default function Column(props) {
  const cells = [0,1,2,3,4,5].map( val => 
    <Cell key={val} index={val} />
  );

  return (
    <div className="column">
      {cells}
    </div>
  )
}