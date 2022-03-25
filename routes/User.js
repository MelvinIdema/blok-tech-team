const express = require('express');
const UserController = require('./../app/controllers/UserController.js');

const UserRouter = express.Router();

UserRouter.get('/login', UserController.login);
UserRouter.post('login', UserController.login);

module.exports = UserRouter;
