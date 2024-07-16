const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Student = require('./student');
const Post = require('./post');

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
    studentId: {
        type: DataTypes.INTEGER,
        references: {
            model: Student,
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

module.exports = Merchandise;
