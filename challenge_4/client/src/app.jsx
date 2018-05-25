import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Column from './components/column.jsx';


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      board: [
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0]
              ],
      turn: true, //black
    }
  }

  onColClick(colIndex, cellIndex){
    if (this.state.turn) {
      this.setState( (prevState, props) => {
        prevState.board[colIndex][cellIndex] = 'B';
        prevState.turn = !prevState.turn;
        return {
          board: prevState.board, 
          turn:prevState.turn
        };
      })
    } else if (!this.state.turn) {
      this.setState( (prevState, props) => {
        prevState.board[colIndex][cellIndex] = 'R';
        prevState.turn = !prevState.turn;
        return {
          board: prevState.board, 
          turn:prevState.turn
        };
      })
    }
  }

  checkRows() {
    
  }
  
  checkCols() {
    let board = this.state.board;
    for (let row = board.length-1; row > 0; row--) {
      let countB = 0;
      let countR = 0;
      for (let cell = board[row].length-1; cell > 0; cell--){
        if (board[row][cell] === 'B'){
          countB++;
        } else if (board[row][cell] === 'R') {
          countR++;
        }
      }
      if (countB === 4) {
        alert('B won!');
      } else if (countR === 4) {
        alert('R won!');
      }
    }
  }

  // checkMDiags() {

  // }

  // checkmDiags() {

  // }

  componentDidUpdate(){
    console.log(this.state.board)
    this.checkCols();
  }

  render(){
    const columns = this.state.board.map( (arr, index) => 
      <Column key={index} 
      index={index} 
      arr={arr} 
      colClick={this.onColClick.bind(this)} 
      turn = {this.state.turn}
      />
    );
    return(
      <div className="board">
        {columns}
      </div>
    )   
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

