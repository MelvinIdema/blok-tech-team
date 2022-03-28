const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect(process.env.DB_URI);

const puppleSchema = new Schema({
  name: String,
  location: String,
  age: Number,
  personality: String,
  walkDuration: Number,
});

module.exports = mongoose.model('Pupple', puppleSchema);
