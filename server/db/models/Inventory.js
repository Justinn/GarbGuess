const Sequelize = require('sequelize');
const db = require('../index');

const Inventory = db.define('inventory', {
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

module.exports = Inventory;
