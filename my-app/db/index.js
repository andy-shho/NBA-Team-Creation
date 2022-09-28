const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/nba';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

db
  .then (() => console.log(`Connected to ${mongoURI}`))
  .catch((err) => console.log('Failed to connect to db'))


module.exports = db;

