const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect(process.env.DB_URI);

const puppleSchema = new Schema({
  imgUrl: String,
  name: String,
  location: { lat: String, lon: String },
  age: Number,
  personality: String,
  walkDuration: Number,
  description: String,
});

module.exports = mongoose.model('Pupple', puppleSchema);
