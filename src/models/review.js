const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Advertiser = require('./advertiser');
const Student = require('./student');

const Review = sequelize.define('Review', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    rating: {
        type: DataTypes.INTEGER,
    },
    comment: {
        type: DataTypes.STRING,
    },
    advertiserId: {
        type: DataTypes.INTEGER,
        references: {
            model: Advertiser,
            key: 'id',
        },
    },
    studentId: {
        type: DataTypes.INTEGER,
        references: {
            model: Student,
            key: 'id',
        },
    },
});

module.exports = Review;
