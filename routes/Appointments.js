const express = require('express');
const AppointmentsController = require('../app/controllers/AppointmentsController.js');
const authenticated = require('../app/middlewares/authenticated.js');
const AppointmentsRouter = express.Router();

AppointmentsRouter.use(authenticated);
AppointmentsRouter.get('/', AppointmentsController.appointments);

module.exports = AppointmentsRouter;
