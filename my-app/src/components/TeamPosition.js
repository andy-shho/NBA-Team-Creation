import React from 'react';

function TeamPosition(props) {
  return (
    <div>
      <div>
        <img id="team-player-photo" src={props.positionData[1]} alt=""/>
      </div>
      <div id="player-name">
        <h4>{props.positionData[0].first_name} {props.positionData[0].last_name}</h4>
      </div>
    </div>
  )
}

export default TeamPosition;