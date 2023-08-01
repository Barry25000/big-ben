// models/User.js

const mongoose = require('mongoose');
const {Schema} = mongoose
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');
const Order = require('./Order');

// Define the UserSchema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true // removes whitespace from both ends of a string
  },
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please enter a valid password'],
    minlength: [4, 'Minimum password length must be 4 characters']
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  orders: [Order.schema]
});

// set up a pre-save middleware to create the password
UserSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// compare the incoming password with the hashed password
UserSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', UserSchema);

module.exports = User;

