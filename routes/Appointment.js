const express = require('express');
const AppointmentController = require('../app/controllers/AppointmentController.js');

const AppointmentRouter = express.Router();

AppointmentRouter.get('/', AppointmentController.appointment);

module.exports = AppointmentRouter;
