import React, {Component} from 'react';
import Cell from './cell.jsx';


export default function Column (props) {
  function handleClick() {
    let cellIndex = 6;
    for (let i = 0; i < props.arr.length; i++) {
      if (props.arr[i] !== 0) {
        cellIndex = i-1;
        if (cellIndex < 0) {
          cellIndex = 0;
        }
        break;
      }
    }
    props.colClick(props.index, cellIndex);
  }
  const cells = props.arr.map( (cell,index) => {
    var bgColor;
    if (cell === 0) {
      bgColor = 'white';
    } else if (cell === 'B') {
      bgColor = 'black';
    } else if (cell === 'R') {
      bgColor = 'red';
    }
    return(
    <Cell key={index} 
    cellIndex={index} 
    colIndex={props.index} 
    bgColor={bgColor}
      />
    )}
  );

  return (
    <div className="column" onClick={handleClick.bind(this)}>
      {cells}
    </div>
  )
}