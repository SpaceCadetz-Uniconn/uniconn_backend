const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Post = require('./post');

const Attachment = sequelize.define('Attachment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  postId: {
    type: DataTypes.INTEGER,
    references: {
      model: Post,
      key: 'id',
    },
  },
});

module.exports = Attachment;
