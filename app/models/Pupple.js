const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI);

const puppleSchema = new mongoose.Schema({
  imgUrl: String,
  name: String,
  location: { lat: String, lon: String },
  locationName: String,
  age: Number,
  personality: String,
  walkDuration: Number,
  description: String,
});

module.exports = mongoose.model('Pupple', puppleSchema);
