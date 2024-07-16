const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Advertiser = require('./advertiser');
const Post = require('./post');

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
    advertiserId: {
        type: DataTypes.INTEGER,
        references: {
            model: Advertiser,
            key: 'id',
        },
    },
    postId: {
        type: DataTypes.INTEGER,
        references: {
            model: Post,
            key: 'id',
        },
    },


});

module.exports = Job;
