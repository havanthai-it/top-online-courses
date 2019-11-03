const mongoose = require('mongoose');
const config = require('../config');

const connectDb = () => {
  const DB_URL = `mongodb://${config.db.username}:${config.db.password}` +
    `@${config.db.host}:${config.db.port}/${config.db.database}?authSource=admin`;

  mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

  // Connected event
  mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection is open to ', DB_URL);
  })

  // Error event
  mongoose.connection.on('error', (error) => {
    console.log('Mongoose default connection has occured ' + error + ' error');
  });

  // Disconnected event
  mongoose.connection.on('disconnected', () => {
    console.log('Mongoose default connection is disconnected');
  });
}

module.exports = connectDb;
