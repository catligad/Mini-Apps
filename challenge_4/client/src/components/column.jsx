import React, {Component} from 'react';
import Cell from './cell.jsx';


export default function Column (props) {
  function handleClick() {
    let cellIndex = 5;
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

  function checkbgColor(cell) {
    if (cell === 0) {
      return 'white';
    } else if (cell === props.player1) {
      return  'black';
    } else if (cell === props.player2) {
      return 'red';
    }
  }

  const cells = props.arr.map( (cell,index) => {
    const bgColor = checkbgColor(cell);
    return(
    <Cell key={index} 
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