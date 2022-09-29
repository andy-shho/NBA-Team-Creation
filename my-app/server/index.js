const express = require ('express');
const axios = require('axios');
const path = require('path');
const db = require ('../db/index.js');
const getTeam = require('./controllers/teamPhoto.js');
const getProfile = require('./controllers/profilePhoto.js');
const app = express();


app.use(express.static(path.join('build')));
app.use(express.json());

app.get('/', function (req, res) {
  res.sendFile(path.join('build', 'index.html'));
});

app.get('/player', (req, res) => {
  axios.get(`https://www.balldontlie.io/api/v1/players/${req.query.playerId}`)
    .then((results) => res.send(results.data))
    .catch((err) => res.send(err))
})

app.get('/averages', (req, res) => {
  axios.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${req.query.playerId}`)
  .then((results) => res.send(results.data.data[0]))
  .catch((err) => res.send(err))
});

app.get('/search', (req, res) => {
  axios.get(`https://www.balldontlie.io/api/v1/players?per_page=100&search=${req.query.name}`)
    .then((results) => res.send(results.data.data))
    .catch((err) => res.send(err))
})

app.get('/teamphoto', getTeam);

app.get('/playerphoto', getProfile);

const API_PORT = 3000;
app.listen(API_PORT);
console.log(`Listening at http://localhost:${API_PORT}`);