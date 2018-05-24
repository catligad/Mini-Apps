import React, {Component} from 'react';
import Cell from './cell.jsx';


export default class Column extends Component {
  constructor(props) {
    super(props);
    this.state={
      triggered: false,
    }
  }

  handleClick() {
    this.setState({
      triggered: true,
    })
    console.log(`Column ${this.props.index} was clicked!`);
  }

  
  render(){
    const cells = this.props.cells.map( (cell,index) => 
      <Cell key={index} cellIndex={index} columnTriggered={this.state.triggered} colIndex={this.props.index} />
    );

    return (
      <div className="column" onClick={this.handleClick.bind(this)}>
        {this.props.index}
        {cells}
      </div>
    )
  }
}