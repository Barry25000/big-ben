// models/index.js

// Import all the model files
const User = require('./User');
const Item = require('./Item');
const Cart = require('./Cart');
const Order = require('./Order');

// Export all the models as an object
module.exports = {
  User,
  Item,
  Cart,
  Order,
};

const models = require('./models'); // Assuming the index.js file is in the root of the 'models' folder

const User = models.User;

// Now, you can use the User model to perform database operations
