import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Column from './components/column.jsx';


function checkLine(a,b,c,d) {
  return (
    (a != 0) &&
    (a == b) &&
    (a == c) &&
    (a == d)
  );
}

function checkWinner(board) {
  let winner;
  //check down
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 7; c++) {
      if (checkLine(
          board[r][c],
          board[r+1][c],
          board[r+2][c],
          board[r+3][c],
        )) {
      winner = board[r][c];
      }
    }
  }

  //check row
  for (let r = 0; r < 6; r++) {
    for (let c = 0; c < 4; c++) {
      if (checkLine(
          board[r][c],
          board[r][c+1],
          board[r][c+2],
          board[r][c+3],
        )) {
      winner = board[r][c];
      }
    }
  }

  //check M diag
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 4; c++) {
      if (checkLine(
          board[r][c],
          board[r+1][c+1],
          board[r+2][c+2],
          board[r+3][c+3],
        )) {
      winner = board[r][c];
      }
    }
  }

  //check m diag
  for (let r = 3; r < 6; r++) {
    for (let c = 0; c < 4; c++) {
      if (checkLine(
          board[r][c],
          board[r-1][c+1],
          board[r-2][c+2],
          board[r-3][c+3],
        )) {
      winner = board[r][c];
      }
    }
  }

  return winner;
}

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      board: [ //these are columns :(
              [0,0,0,0,0,0], 
              [0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0],
              [0,0,0,0,0,0]
              ],
      turn: true, //black
      winner:'',
    }
  }

  onColClick(colIndex, cellIndex){
    const { board, turn } = this.state;
    const newState = {
      board,
      turn: !turn,
    };
    if (this.state.turn) {
      newState.board[colIndex][cellIndex] = 'B';
    } else {
      newState.board[colIndex][cellIndex] = 'R';
    }
    const winner = checkWinner(newState.board);
    newState.winner = winner;
    this.setState(newState);
  }

  placeHolderMessage(){
    var placeholder;
    if (this.state.winner == 'B' || this.state.winner == 'R'){
      return `Player ${this.state.winner} won!`
    }
    if (this.state.turn) {
      return "Player Black Turn"
    } else {
      return "Player Red Turn"
    }
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

    const placeholder = this.placeHolderMessage();

    return(
      <div>
        <div className="winner"> {placeholder}</div>
        <div className="board">{columns} </div>
      </div>
    )   
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

