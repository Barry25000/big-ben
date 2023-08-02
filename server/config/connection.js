const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/watch_db')

module.exports = mongoose.connection;

console.log('connected to mongoose db at `mongodb://127.0.0.1:27017/watch_db`')

