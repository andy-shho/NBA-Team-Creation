const models = require ('../../db/models/teamPhoto.js');

const get = (req, res) => {
  models(req.query)
    .then((results) => {
      res.send(results.rows[0].url);
    })
    .catch((err) => res.sendStatus(500));
}

module.exports = get;

