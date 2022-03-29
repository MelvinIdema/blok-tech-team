const express = require('express');
const PuppleController = require('../app/controllers/PuppleController.js');
const authenticated = require('./../app/middlewares/authenticated.js');
const PuppleRouter = express.Router();

PuppleRouter.use(authenticated);

PuppleRouter.get('/', PuppleController.cards);
PuppleRouter.get('/info', PuppleController.info);

// API
PuppleRouter.get('/api', PuppleController.api);

module.exports = PuppleRouter;
