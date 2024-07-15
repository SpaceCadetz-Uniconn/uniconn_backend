const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
    },
    location: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
});

module.exports = Post;
