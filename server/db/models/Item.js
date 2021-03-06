const Sequelize = require('sequelize');
const db = require('../database');

const Item = db.define('item', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '/assets/images/placeholder.jpg',
  },
  type: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  color: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  season: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Item;