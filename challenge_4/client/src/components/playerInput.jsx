import React, {Component} from 'react';

export default function PlayerInputs(props) {
  function handleBtnClick(event) {
    props.click();
  }

  function handleFormChange(event) {
    props.change(event.target.className, event.target.value);
  }

  if (!props.formHide) {
    return (
    <div className="players">
      <div className="playerSubmit">
        <input type="input" placeholder="Player 1" className="player1" onChange={handleFormChange.bind(this)} />
      </div>

      <div className="playerSubmit">
        <input type="input" placeholder="Player2" className="player2" onChange={handleFormChange.bind(this)} />
        <div className="submitBtn" onClick={handleBtnClick.bind(this)}> Submit </div>
      </div>
    </div>
    )} else {
    return null;
  }
}