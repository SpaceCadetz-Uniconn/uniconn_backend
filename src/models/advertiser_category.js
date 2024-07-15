const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const AdvertiserCategory = sequelize.define('AdvertiserCategory', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

module.exports = AdvertiserCategory;
