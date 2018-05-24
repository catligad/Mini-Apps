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
              ]
    }
  }

  onCellClick(index){
    this.setState
  }

  render(){
    const columns = this.state.board.map( (arr, index) => 
      <Column key={index} index={index} cells={this.state.board} />
    );
    return(
      <div className="board">
        {columns}
      </div>
    )   
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

