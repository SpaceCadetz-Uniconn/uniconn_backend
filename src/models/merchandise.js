const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Merchandise = sequelize.define('Merchandise', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    type: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.STRING,
    },
});

module.exports = Merchandise;
