import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Column from './components/column.jsx';


class App extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    const columns = [0,1,2,3,4,5,6].map( val => 
      <Column key={val} index={val} />
    );
    return(
      <div className="board">
        {columns}
      </div>
    )   
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

