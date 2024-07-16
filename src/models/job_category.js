const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const JobCategory = sequelize.define('JobCategory', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
});

module.exports = JobCategory;
