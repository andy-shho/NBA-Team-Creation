import React, {useState, useEffect} from 'react';
import axios from 'axios';

function PlayerInfo (props) {
  const [teamPhoto, setPhoto] = useState(0);

  useEffect(() => {
    axios.get('/teamphoto', {params: {team: props.pData.team.name}})
      .then((results) => setPhoto(results.data))
      .catch((err) => console.log(err))
  }, [props.pData])

  return (
    <div>
      {teamPhoto
      ? (<div>
          <h1>{props.pData.first_name} {props.pData.last_name}</h1>
          <img id="profile-photo" src={props.profilePhoto} alt=""></img>
          <h3>Position: {props.pData.position}</h3>
          <img id="team-photo" src={teamPhoto} alt=""></img>
          <h3>{props.pData.team.full_name}</h3>
          <h3>Height: {props.pData.height_feet}'{props.pData.height_inches}"</h3>
          <h3>Weight: {props.pData.weight_pounds} lb</h3>
          <div id="player-stats">
            <h2>Stats:</h2>
            <div>{props.playerStats.pts} ppg</div>
            <div>{props.playerStats.reb} rpg</div>
            <div>{props.playerStats.ast} apg</div>
            <div>{props.playerStats.stl} spg</div>
            <div>{props.playerStats.blk} bpg</div>
          </div>
        </div>)
      : null}
    </div>
  )
}

export default PlayerInfo;