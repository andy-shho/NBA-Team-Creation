import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TeamPosition from './TeamPosition';

function TeamList (props) {
  const [PG, setPG] = useState([]);
  const [SG, setSG] = useState([]);
  const [SF, setSF] = useState([]);
  const [PF, setPF] = useState([]);
  const [C, setC] = useState([]);
  const [totals, setTotal] = useState([])

  return (
    <div>
      <div>
        <h5>Point Guard</h5>
        {PG.length
        ? (<div>
            <TeamPosition positionData={PG}/>
          </div>)
        : <div>
            <button id="add-team" type='button'>+</button>
          </div>}
      </div>
    </div>
  )

}

export default TeamList;
