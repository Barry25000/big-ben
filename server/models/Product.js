// models/Item.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the ItemSchema
const ProductSchema = new Schema({
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
    default: Date.now// current timestamp
  },
  image: {
    type: String,
    description: String
  

  }

});

// Create and export the Item model based on the ItemSchema
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
