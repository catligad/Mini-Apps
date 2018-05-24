import React, {Component} from 'react';

export default class Cell extends Component {
  constructor(props){
    super(props);
    this.state={
      bgColor: 'white',
    }
  }

  render(){
    return (
      <div className="cell" 
      style={{backgroundColor: this.state.bgColor}} ></div>
    )
  }
}