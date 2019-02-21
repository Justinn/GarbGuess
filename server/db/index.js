const db = require('./database');
const User = require('./models/User');
const Item = require('./models/Item')

//define our relationships in our database using sequelize
Item.belongsTo(User);
User.hasMany(Item);

module.exports = {
  db,
  User,
  Item,
};
