const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Advertiser = require('./advertiser');
const Student = require('./student');
const Post = require('./post');

const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
 
  venue: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATE,
  },
  ticket_price: {
    type: DataTypes.STRING,
  },
  time: {
    type: DataTypes.TIME,
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
  postId: {
    type: DataTypes.INTEGER,
    references: {
      model: Post,
      key: 'id',
    },
  },
});

module.exports = Event;
