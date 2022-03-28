const express = require('express');
const PuppleController = require('../app/controllers/PuppleController.js');

const PuppleRouter = express.Router();

PuppleRouter.get('/', PuppleController.cards);
PuppleRouter.get('/info', PuppleController.info);

module.exports = PuppleRouter;
