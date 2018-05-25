import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Column from './components/column.jsx';


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

  //I LOOKED ON STACK OVERFLOW FOR THIS GAME LOGIC. IT'S NOT MINE.
  checkLine(a,b,c,d) {
    return (
      (a != 0) &&
      (a == b) &&
      (a == c) &&
      (a == d)
    );
  }

  checkWinner(board) {
    let winner;
    //check down
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 7; c++) {
        if (this.checkLine(
            board[r][c],
            board[r+1][c],
            board[r+2][c],
            board[r+3][c],
          )) {
        winner = (board[r][c] + 'won!');
        }
      }
    }

    //check row
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (this.checkLine(
            board[r][c],
            board[r][c+1],
            board[r][c+2],
            board[r][c+3],
          )) {
        winner = (board[r][c] + 'won!');
        }
      }
    }

    //check M diag
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 4; c++) {
        if (this.checkLine(
            board[r][c],
            board[r+1][c+1],
            board[r+2][c+2],
            board[r+3][c+3],
          )) {
        winner = (board[r][c] + 'won!');
        }
      }
    }

    //check m diag
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (this.checkLine(
            board[r][c],
            board[r-1][c+1],
            board[r-2][c+2],
            board[r-3][c+3],
          )) {
        winner = (board[r][c] + 'won!');
        }
      }
    }
    if (winner !== undefined) {
      alert(winner);
    }
  }

  componentDidUpdate(){
    let board = this.state.board;
    this.checkWinner(board);
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

