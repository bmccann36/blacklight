const Sequelize = require('sequelize');
const db = require('../db');

const Memory = db.define('memory', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  text: {
    type: Sequelize.TEXT,
  },
  lng: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  lat: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = Memory;
