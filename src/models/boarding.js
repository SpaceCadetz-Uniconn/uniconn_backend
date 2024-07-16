const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Post = require('./post');

const Boarding = sequelize.define('Boarding', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    fees: {
        type: DataTypes.STRING,
    },
    advertiserId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Advertiser',
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

module.exports = Boarding;
