// models/index.js

// Import all the model files
const User = require('./User');
const Product = require('./Product');
const Cart = require('./Cart');
const Order = require('./Order');
const Category = require('./Category');

// Export all the models as an object
module.exports = {
  User,
  Product,
  Cart,
  Order,
  Category
};




