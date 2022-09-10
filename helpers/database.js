const Sequelize = require('sequelize');
const config = require('@config/config.json')[process.env.NODE_ENV || 'dev'];
const {username, database, password, host, dialect, logging} = config;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  dialectOptions: {connectTimOut: 60000},
  logging,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;

