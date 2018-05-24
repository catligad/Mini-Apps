import React, {Component} from 'react';

export default class Cell extends Component {
  constructor(props){
    super(props);
    this.state={
      triggered: false,
      bgColor: 'white',
    }
  }

  handleClick() {

  }

  render(){
    return (
      <div className="cell" 
      style={{backgroundColor: this.state.bgColor}}
      onClick={this.handleClick.bind(this)}>
        {this.props.index}</div>
    )
  }
}