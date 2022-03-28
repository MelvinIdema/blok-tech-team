const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect(process.env.DB_URI);
const puppleSchema = new Schema({
  name: String,
  age: Number,
});

module.exports('Pupple', puppleSchema);
