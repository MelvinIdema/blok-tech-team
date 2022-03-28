const express = require('express');
const AppController = require('./../app/controllers/AppController.js');
const authenticated = require('./../app/middlewares/authenticated.js');
const AppRouter = express.Router();

AppRouter.use(authenticated);
AppRouter.get('/', AppController.home);

module.exports = AppRouter;
