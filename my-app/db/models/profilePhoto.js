const postgres = require ('../index.js');

const getPhoto = function (params) {
  let queryString = `SELECT nbaid FROM profiles WHERE nbaname = '${params}'`;
  return postgres.query(queryString);
}

module.exports = getPhoto;


// const mongoose = require ('mongoose');


// const nbaSchema = new mongoose.Schema ({
//   team: String,
//   url: String
// })

// const Nba = mongoose.model('Nba', nbaSchema);

// // Nba.create({team: 'Celtics', url: 'https://cdn.nba.com/logos/nba/1610612738/primary/L/logo.svg'},
// // {team: 'Nets', url: 'https://cdn.nba.com/logos/nba/1610612751/primary/L/logo.svg'},
// // {team: 'Knicks', url: 'https://cdn.nba.com/logos/nba/1610612752/primary/L/logo.svg'},
// // {team: '76ers', url: 'https://cdn.nba.com/logos/nba/1610612755/primary/L/logo.svg'},
// // {team: 'Raptors', url: 'https://cdn.nba.com/logos/nba/1610612761/primary/L/logo.svg'},
// // {team: 'Bulls', url: 'https://cdn.nba.com/logos/nba/1610612741/primary/L/logo.svg'},
// // {team: 'Cavaliers', url: 'https://cdn.nba.com/logos/nba/1610612739/primary/L/logo.svg'},
// // {team: 'Pistons', url: 'https://cdn.nba.com/logos/nba/1610612765/primary/L/logo.svg'},
// // {team: 'Pacers', url: 'https://cdn.nba.com/logos/nba/1610612754/primary/L/logo.svg'},
// // {team: 'Bucks', url: 'https://cdn.nba.com/logos/nba/1610612749/primary/L/logo.svg'},
// // {team: 'Hawks', url: 'https://cdn.nba.com/logos/nba/1610612737/primary/L/logo.svg'},
// // {team: 'Hornets', url: 'https://cdn.nba.com/logos/nba/1610612766/primary/L/logo.svg'},
// // {team: 'Heat', url: 'https://cdn.nba.com/logos/nba/1610612748/primary/L/logo.svg'},
// // {team: 'Magic', url: 'https://cdn.nba.com/logos/nba/1610612753/primary/L/logo.svg'},
// // {team: 'Wizards', url: 'https://cdn.nba.com/logos/nba/1610612764/primary/L/logo.svg'},
// // {team: 'Nuggets', url: 'https://cdn.nba.com/logos/nba/1610612743/primary/L/logo.svg'},
// // {team: 'Timberwolves', url: 'https://cdn.nba.com/logos/nba/1610612750/primary/L/logo.svg'},
// // {team: 'Thunder', url: 'https://cdn.nba.com/logos/nba/1610612760/primary/L/logo.svg'},
// // {team: 'Trail Blazers', url: 'https://cdn.nba.com/logos/nba/1610612757/primary/L/logo.svg'},
// // {team: 'Jazz', url: 'https://cdn.nba.com/logos/nba/1610612762/primary/L/logo.svg'},
// // {team: 'Warriors', url: 'https://cdn.nba.com/logos/nba/1610612744/primary/L/logo.svg'},
// // {team: 'Clippers', url: 'https://cdn.nba.com/logos/nba/1610612746/primary/L/logo.svg'},
// // {team: 'Lakers', url: 'https://cdn.nba.com/logos/nba/1610612747/primary/L/logo.svg'},
// // {team: 'Suns', url: 'https://cdn.nba.com/logos/nba/1610612756/primary/L/logo.svg'},
// // {team: 'Kings', url: 'https://cdn.nba.com/logos/nba/1610612758/primary/L/logo.svg'},
// // {team: 'Mavericks', url: 'https://cdn.nba.com/logos/nba/1610612742/primary/L/logo.svg'},
// // {team: 'Rockets', url: 'https://cdn.nba.com/logos/nba/1610612745/primary/L/logo.svg'},
// // {team: 'Grizzlies', url: 'https://cdn.nba.com/logos/nba/1610612763/primary/L/logo.svg'},
// // {team: 'Pelicans', url: 'https://cdn.nba.com/logos/nba/1610612740/primary/L/logo.svg'},
// // {team: 'Spurs', url: 'https://cdn.nba.com/logos/nba/1610612759/primary/L/logo.svg'});

// module.exports = Nba;