// models/Cart.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the CartSchema
const CartSchema = new Schema({
  userId: {
    type: String,
  },
  items: [{
    productId: {
      type: String,
    },
    name: String,
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity cannot be less than 1.'],
      default: 1
    },
    price: Number
  }],
  bill: {
    type: Number,
    required: true,
    default: 0,
    coupoun: {
      type: String,
      default: 'none'
    },


  }
});

// Create and export the Cart model based on the CartSchema
const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
