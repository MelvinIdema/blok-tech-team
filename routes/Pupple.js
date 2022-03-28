const express = require('express');
const PuppleController = require('../app/controllers/PuppleController.js');

const PuppleRouter = express.Router();

PuppleRouter.get('/', PuppleController.cards);

// PuppleRouter.get('/', PuppleController.confirm);

module.exports = PuppleRouter;
