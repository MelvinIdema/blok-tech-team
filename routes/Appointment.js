const express = require('express');
const AppointmentController = require('../app/controllers/AppointmentController.js');
const authenticated = require('./../app/middlewares/authenticated.js');
const AppointmentRouter = express.Router();

AppointmentRouter.use(authenticated);
AppointmentRouter.get('/', AppointmentController.appointment);

module.exports = AppointmentRouter;
