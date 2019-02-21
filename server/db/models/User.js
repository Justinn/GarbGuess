const Sequelize = require('sequelize');
const db = require('../index');

const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = User;
