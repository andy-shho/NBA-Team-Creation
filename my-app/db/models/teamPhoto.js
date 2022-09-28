const Nba = require('./Nba.js');

const getPhoto = (params) =>{
  return Nba.find(params).select('url -_id').exec();
}

module.exports = getPhoto;
