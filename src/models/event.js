const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
 
  venue: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATE,
  },
  ticket_price: {
    type: DataTypes.STRING,
  },
  time: {
    type: DataTypes.TIME,
  },
});

module.exports = Event;
