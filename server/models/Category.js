// models/Category.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the CategorySchema
const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  }
 
});

// Create and export the Category model based on the CategorySchema
const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
