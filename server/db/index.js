const db = require('./database');
const User = require('./models/User');
const Inventory = require('./models/Inventory');

//define our relationships in our database using sequelize
Inventory.belongsTo(User);
User.hasOne(Inventory);

module.exports = {
  db,
  User,
  Inventory,
};
