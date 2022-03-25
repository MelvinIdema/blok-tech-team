const express = require('express');
const AppController = require('./../app/controllers/AppController.js');

const AppRouter = express.Router();

AppRouter.get('/', AppController.home);

module.exports = AppRouter;