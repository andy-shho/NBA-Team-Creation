import React from 'react';

function TeamPosition(props) {
  return (
    <div>
      {props.pData.first_name} {props.playerStats.last_name}
    </div>
  )
}

export default TeamPosition;