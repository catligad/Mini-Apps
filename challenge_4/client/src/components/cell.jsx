import React, {Component} from 'react';

export default function Cell (props) {
    return (
      <div className="cell" 
      style={{backgroundColor: props.bgColor}} ></div>
    )
}