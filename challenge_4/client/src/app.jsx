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

  componentDidUpdate(){
    // let board = this.state.board;
    // for (let row = 0; row < board.length; row++) {
    //   for (let cell = 0; cell < board[row].length; cell++){
    //     if ()
    //   }
    // }
    console.log(this.state)
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

