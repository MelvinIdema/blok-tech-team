const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI);

const appointmentSchema = new mongoose.Schema({
  date: Date,
  time: Number,
  name: String,
  location: String,
});

module.exports = mongoose.model('Appointment', appointmentSchema);
