const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Class = sequelize.define('Class', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  
  grade: {
    type: DataTypes.STRING,
  },
  subject: {
    type: DataTypes.STRING,
  },
});

module.exports = Class;
