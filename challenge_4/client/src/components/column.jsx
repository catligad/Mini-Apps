import React, {Component} from 'react';
import Cell from './cell.jsx';


export default class Column extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    let cellIndex = 6;
    for (let i = 0; i < this.props.arr.length; i++) {
      if (this.props.arr[i] === 1) {
        cellIndex = i-1;
        if (cellIndex < 0) {
          cellIndex = 0;
        }
        break;
      }
    }
    this.props.colClick(this.props.index, cellIndex);
  }

  setBgColor() {
    
  }
  
  render(){
    const cells = this.props.arr.map( (cell,index) => {
      var bgColor;
      if (cell === 1) {
        if (this.props.turn) {
          bgColor = 'red';
        } else {
          bgColor = 'black';
        }
      } else {
        bgColor = 'white';
      }
      return(
      <Cell key={index} 
      cellIndex={index} 
      colIndex={this.props.index} 
      bgColor={bgColor}
       />
      )}
    );

    return (
      <div className="column" onClick={this.handleClick.bind(this)}>
        {cells}
      </div>
    )
  }
}