// models/Item.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the ItemSchema
const ItemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  date_added: {
    type: Date,
    default: Date.now
  }
});

// Create and export the Item model based on the ItemSchema
const Item = mongoose.model('item', ItemSchema);

module.exports = Item;
