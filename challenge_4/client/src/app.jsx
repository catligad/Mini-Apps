import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Column from './components/column.jsx';
import PlayerInput from './components/playerInput.jsx';


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
  //check row
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 6; c++) {
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

  //check column
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
      player1: 'Black',
      player2: 'Red',
      formHide: false,
    }
  }

  onColClick(colIndex, cellIndex){
    const { board, turn } = this.state;
    const newState = {
      board,
      turn: !turn,
    };
    if (this.state.turn) {
      newState.board[colIndex][cellIndex] = this.state.player1;
    } else {
      newState.board[colIndex][cellIndex] = this.state.player2;
    }
    const winner = checkWinner(newState.board);
    newState.winner = winner;
    this.setState(newState);
  }

  handleBtnClick() {
    this.setState({
      formHide: true,
    });
  }

  handleFormChange(player, input) {
    this.setState({
      [player]:input,
    });
  }

  placeHolderMessage(){
    var placeholder;
    if (this.state.winner == this.state.player1 || this.state.winner == this.state.player2){
      return `${this.state.winner} won!`
    }
    if (this.state.turn) {
      return `${this.state.player1}'s Turn`
    } else {
      return `${this.state.player2}'s Turn`
    }
  }
  
  render(){
    const columns = this.state.board.map( (arr, index) => 
      <Column key={index} 
      index={index} 
      arr={arr} 
      colClick={this.onColClick.bind(this)} 
      turn = {this.state.turn}
      player1 = {this.state.player1}
      player2 = {this.state.player2}
      />
    );

    const placeholder = this.placeHolderMessage();

    return(
      <div className="appHolder">
        <PlayerInput click={this.handleBtnClick.bind(this)} 
        player1={this.state.player1} 
        player2={this.state.player2} 
        change={this.handleFormChange.bind(this)} 
        formHide={this.state.formHide} />
        <div className="winner"> {placeholder}</div>
        <div className="board">{columns} </div>
      </div>
    )   
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

