const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI);

const appointmentSchema = new mongoose.Schema({
  imgUrl: String,
  date: Date,
  time: Number,
  name: String,
  location: String,
});

module.exports = mongoose.model('Appointment', appointmentSchema);
