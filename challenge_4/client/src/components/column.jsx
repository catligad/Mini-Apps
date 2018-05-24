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
      }
    }
    this.props.colClick(this.props.index, cellIndex);
  }

  
  render(){
    const cells = this.props.arr.map( (cell,index) => 
      <Cell key={index} 
      cellIndex={index} 
      colIndex={this.props.index} 
      cell={cell}
       />
    );

    return (
      <div className="column" onClick={this.handleClick.bind(this)}>
        {cells}
      </div>
    )
  }
}