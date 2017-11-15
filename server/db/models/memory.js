const Sequelize = require('sequelize');
const db = require('../db');

const Memory = db.define('memory', {
  title: {
    type: Sequelize.STRING,
  },
  text: {
    type: Sequelize.TEXT,
  },
  lng: {
    type: Sequelize.FLOAT,
  },
  lat: {
    type: Sequelize.FLOAT,
  },
});

module.exports = Memory;
