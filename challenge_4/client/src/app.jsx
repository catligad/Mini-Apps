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
      turn: true,
    }
  }

  onColClick(colIndex, cellIndex){
    this.setState( (prevState, props) => {
      prevState.board[colIndex][cellIndex] = 1;
      prevState.turn = !prevState.turn;
      return {
        board: prevState.board, 
        turn:prevState.turn
      };
    })
  }

  // componentDidUpdate(){
  //   console.log(this.state);
  // }

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

