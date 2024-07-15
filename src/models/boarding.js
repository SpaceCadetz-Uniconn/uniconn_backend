const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Boarding = sequelize.define('Boarding', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fees: {
        type: DataTypes.STRING,
    },


});

module.exports = Boarding;
