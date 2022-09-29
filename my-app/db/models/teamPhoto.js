const postgres = require ('../index.js');

const getTeam = function (params) {
  let queryString = `SELECT url FROM teams WHERE team = '${params.team}'`;
  return postgres.query(queryString);
}

module.exports = getTeam;
