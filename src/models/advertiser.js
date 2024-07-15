const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Advertiser = sequelize.define('Advertiser', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING,
    },
    last_name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    location: {
        type: DataTypes.STRING,
    },
    contact_no: {
        type: DataTypes.STRING,
    },
    bio: {
        type: DataTypes.TEXT,
    },
    profile_pic: {
        type: DataTypes.STRING,
    },
});

module.exports = Advertiser;
