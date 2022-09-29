const {Client} = require ('pg');

const postgres = new Client ({
  user: 'postgres',
  host: 'localhost',
  port: 5432,
  password: 'postgres',
  database: 'nba'
})

postgres.connect()
  .then(() => console.log('Successfully Connected'))
  .catch((err) => (console.log('Failed to connect to PostgreSQL')))

module.exports = postgres;


// const mongoose = require('mongoose');

// const mongoURI = 'mongodb://localhost:27017/nba';

// const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

// db
//   .then (() => console.log(`Connected to ${mongoURI}`))
//   .catch((err) => console.log('Failed to connect to db'))


// module.exports = db;

