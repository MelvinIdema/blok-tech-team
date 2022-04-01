const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI);

const userSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  phone: String,
  age: Number,
  mobility: String,
  username: String,
  password: String,
  appointments: Object,
});

module.exports = mongoose.model('User', userSchema);
