import React, {useState, useEffect} from 'react';
import TeamPosition from './TeamPosition';
import Button from '@mui/material/Button';

function TeamList (props) {
  const [PG, setPG] = useState([]);
  const [SG, setSG] = useState([]);
  const [SF, setSF] = useState([]);
  const [PF, setPF] = useState([]);
  const [C, setC] = useState([]);
  const [totalPoints, setPoints] = useState(0);
  const [totalReb, setReb] = useState(0);
  const [totalAssists, setAssists] = useState(0);
  const [totalSteals, setSteals] = useState(0);
  const [totalBlocks, setBlocks] = useState(0);

  const style = {
    backgroundColor: '#C0D6DF',
  };

  const onPG = function(e) {
    e.preventDefault();
    if (props.pData.position === 'PG' || props.pData.position === 'G') {
      setPG([props.pData, props.profilePhoto]);
      setPoints(totalPoints + props.playerStats.pts);
      setReb(totalReb + props.playerStats.reb);
      setAssists(totalAssists + props.playerStats.ast);
      setSteals(totalSteals + props.playerStats.stl);
      setBlocks(totalBlocks + props.playerStats.blk);
    } else {
      alert('That player is not a Point Guard. Pick another player');
    }
  };

  const onSG = function(e) {
    e.preventDefault();
    if (props.pData.position === 'SG' || props.pData.position === 'G') {
      setSG([props.pData, props.profilePhoto]);
      setPoints(totalPoints + props.playerStats.pts);
      setReb(totalReb + props.playerStats.reb);
      setAssists(totalAssists + props.playerStats.ast);
      setSteals(totalSteals + props.playerStats.stl);
      setBlocks(totalBlocks + props.playerStats.blk);
    } else {
      alert('That player is not a Shooting Guard. Pick another player');
    }
  };

  const onSF = function(e) {
    e.preventDefault();
    if (props.pData.position === 'SF' || props.pData.position === 'F') {
      setSF([props.pData, props.profilePhoto]);
      setPoints(totalPoints + props.playerStats.pts);
      setReb(totalReb + props.playerStats.reb);
      setAssists(totalAssists + props.playerStats.ast);
      setSteals(totalSteals + props.playerStats.stl);
      setBlocks(totalBlocks + props.playerStats.blk);
    } else {
      alert('That player is not a Small Forward. Pick another player');
    }
  };

  const onPF = function(e) {
    e.preventDefault();
    if (props.pData.position === 'PF' || props.pData.position === 'F' || props.pData.position === 'F-C') {
      setPF([props.pData, props.profilePhoto]);
      setPoints(totalPoints + props.playerStats.pts);
      setReb(totalReb + props.playerStats.reb);
      setAssists(totalAssists + props.playerStats.ast);
      setSteals(totalSteals + props.playerStats.stl);
      setBlocks(totalBlocks + props.playerStats.blk);
    } else {
      alert('That player is not a Power Forward. Pick another player');
    }
  };

  const onC = function(e) {
    e.preventDefault();
    if (props.pData.position === 'C' || props.pData.position === 'F-C') {
      setC([props.pData, props.profilePhoto]);
      setPoints(totalPoints + props.playerStats.pts);
      setReb(totalReb + props.playerStats.reb);
      setAssists(totalAssists + props.playerStats.ast);
      setSteals(totalSteals + props.playerStats.stl);
      setBlocks(totalBlocks + props.playerStats.blk);
    } else {
      alert('That player is not a Center. Pick another player');
    }
  };

  const onReset = function (e) {
    e.preventDefault();
    setPG([]);
    setSG([]);
    setSF([]);
    setPF([]);
    setC([]);
    setPoints(0);
    setReb(0);
    setAssists(0);
    setSteals(0);
    setBlocks(0);
  }

  return (
    <div className="team">
      <div className="team-list">
        <div>
          <h2>Point Guard</h2>
          {PG.length
          ? (<div>
              <TeamPosition positionData={PG}/>
            </div>)
          : <div>
              <Button style={style} variant="contained" id="add-team" type='button' onClick={onPG}>+</Button>
            </div>}
        </div>
        <div>
          <h2>Shooting Guard</h2>
          {SG.length
          ? (<div>
              <TeamPosition positionData={SG}/>
            </div>)
          : <div>
              <Button style={style} variant="contained" id="add-team" type='button' onClick={onSG}>+</Button>
            </div>}
        </div>
        <div>
          <h2>Small Forward</h2>
          {SF.length
          ? (<div>
              <TeamPosition positionData={SF}/>
            </div>)
          : <div>
              <Button style={style} variant="contained" id="add-team" type='button' onClick={onSF}>+</Button>
            </div>}
        </div>
        <div>
          <h2>Power Forward</h2>
          {PF.length
          ? (<div>
              <TeamPosition positionData={PF}/>
            </div>)
          : <div>
              <Button style={style} variant="contained" id="add-team" type='button' onClick={onPF}>+</Button>
            </div>}
        </div>
        <div>
          <h2>Center</h2>
          {C.length
          ? (<div>
              <TeamPosition positionData={C}/>
            </div>)
          : <div>
              <Button style={style} variant="contained" id="add-team" type='button' onClick={onC}>+</Button>
            </div>}
        </div>
      </div>
      {totalPoints ?
      (<div id="totals">
        <h2>Totals:</h2>
        <div>{totalPoints.toFixed(2)} ppg</div>
        <div>{totalReb.toFixed(2)} rpg</div>
        <div>{totalAssists.toFixed(2)} apg</div>
        <div>{totalSteals.toFixed(2)} spg</div>
        <div>{totalBlocks.toFixed(2)} bpg</div>
      </div>)
      : null}
      <div id="reset">
        <Button style={style} variant="contained" type="button" onClick={onReset}>Reset Team</Button>
      </div>
    </div>
  );

}

export default TeamList;
