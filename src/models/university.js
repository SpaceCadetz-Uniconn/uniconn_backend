const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const University = sequelize.define('University', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
 
});

module.exports = University;
