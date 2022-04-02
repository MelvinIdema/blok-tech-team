const express = require('express');
const AppointmentsController = require('../app/controllers/AppointmentsController.js');
const authenticated = require('../app/middlewares/authenticated.js');
const AppointmentsRouter = express.Router();

AppointmentsRouter.use(authenticated);
AppointmentsRouter.get('/', AppointmentsController.appointments);
AppointmentsRouter.post('/confirm', AppointmentsController.confirm);
AppointmentsRouter.post('/create', AppointmentsController.create);

module.exports = AppointmentsRouter;
