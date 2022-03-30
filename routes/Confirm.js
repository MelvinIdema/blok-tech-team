const express = require('express');
const ConfirmController = require('../app/controllers/ConfirmController.js');
const authenticated = require('../app/middlewares/authenticated.js');
const ConfirmRouter = express.Router();

ConfirmRouter.use(authenticated);
ConfirmRouter.get('/', ConfirmController.confirm);

module.exports = ConfirmRouter;
