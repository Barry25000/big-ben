// models/Order.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the OrderSchema
const OrderSchema = new Schema({
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
      min: [1, 'Quantity cannot be less than 1.']
    },
    price: Number
  }],
  bill: {
    type: Number,
    required: true
  },
  date_added: {
    type: Date,
    default: Date.now
  }
});

// Create and export the Order model based on the OrderSchema
const Order = mongoose.model('order', OrderSchema);

module.exports = Order;
