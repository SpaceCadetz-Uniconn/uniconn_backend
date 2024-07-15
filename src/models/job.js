const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Job = sequelize.define('Job', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    salary: {
        type: DataTypes.STRING,
    },
    requirements: {
        type: DataTypes.STRING,
    },
   

});

module.exports = Job;
