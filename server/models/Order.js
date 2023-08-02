// models/Order.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the OrderSchema
const OrderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId
  },
  items: [{
    productId: {
      type: Schema.Types.ObjectId,
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
  },
  coupon: {
    type: String,
    default: 'none',
    discount: {
      type: Number,
      default: 0,
      min: [0, 'Discount cannot be less than 0.'],
      max:[100, 'Discount cannot be greater than 100.']

    
    }
  }
});

// Create and export the Order model based on the OrderSchema
const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
