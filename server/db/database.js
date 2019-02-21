const Sequelize = require('sequelize');

//Connect to our postgres database using Sequelize
const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/garbguess`,
  {
    logging: false,
  }
);
module.exports = db;
