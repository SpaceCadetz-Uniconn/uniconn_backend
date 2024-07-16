const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Student = require('./student');
const Post = require('./post');

const Class = sequelize.define('Class', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  
  grade: {
    type: DataTypes.STRING,
  },
  subject: {
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

module.exports = Class;
