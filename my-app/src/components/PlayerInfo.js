import React, {useState, useEffect} from 'react';
import axios from 'axios';

function PlayerInfo (props) {
  const [teamPhoto, setPhoto] = useState(0);

  useEffect(() => {
    axios.get('/teamPhoto', {params: {team: props.pData.team.name}})
      .then((results) => setPhoto(results.data))
      .catch((err) => console.log(err))
  }, [props.pData])

  return (
    <div>
      {teamPhoto
      ? (<div>
          <h1>{props.pData.first_name} {props.pData.last_name}</h1>
          <img id="team-photo"src={teamPhoto} alt=""></img>
          <h5>{props.pData.team.full_name}</h5>
          <h5>Height: {props.pData.height_feet}'{props.pData.height_inches}"</h5>
          <h5>Weight: {props.pData.weight_pounds} lb</h5>
          <div>
            <h3>Stats</h3>
            <li> {props.playerStats.pts} ppg </li>
            <li> {props.playerStats.reb} rpg </li>
            <li> {props.playerStats.ast} apg </li>
            <li> {props.playerStats.blk} bpg </li>
          </div>
        </div>)
      : null}
    </div>
  )
}

export default PlayerInfo;