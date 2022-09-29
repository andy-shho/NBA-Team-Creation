const models = require ('../../db/models/profilePhoto.js');

const get = (req, res) => {
  models(req.query.name)
    .then((results) => {
      let temp = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${results.rows[0].nbaid}.png`;
      res.send(temp);
    })
    .catch((err) => res.sendStatus(500));
}

module.exports = get;