const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model('User', userSchema);
