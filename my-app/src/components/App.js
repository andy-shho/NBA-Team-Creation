import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Search from './Search.js';
import PlayerInfo from './PlayerInfo';
import TeamList from './TeamList';

function App() {
  const [currentPlayer, setCurrent] = useState(237);
  const [playerData, setData] = useState(0);
  const [playerStats, setStats] = useState ({});

  useEffect (() => {
    axios.get('/player', {params: {playerId: currentPlayer}})
      .then ((results) => setData(results.data))
      .catch((err) => console.log('Error'))
  }, [currentPlayer]);

  useEffect (() => {
    axios.get('/averages', {params: {playerId: playerData.id}})
    .then((response) => setStats(response.data))
    .catch((err) => console.log(err))
  }, [playerData]);

  async function search (first, last) {
    const search = await axios.get('/search', {params: {name: last}});
    if (!search.data.length) {
      alert('No Player Exists');
    } else {
      for (let i = 0; i < search.data.length; ++i) {
        if (search.data[i].first_name === first) {
          setCurrent(search.data[i].id);
          return;
        }
      }
      alert('No Player Exists');
    }
  }

  return (
    <div>
    {playerData
      ? (<div>
        <h1>NBA Team Creation</h1>
        <div>
          <Search search={search}/>
        </div>
        <div>
          <PlayerInfo pData={playerData} playerStats={playerStats}/>
        </div>
        <div>
          <TeamList pData={playerData} playerStats={playerStats}/>
        </div>
      </div>)
      : null}
    </div>
  );
}

export default App;

