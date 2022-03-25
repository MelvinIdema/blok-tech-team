const express = require('express');
const UserController = require('./../app/controllers/UserController.js');

const UserRouter = express.Router();

// Login Page
UserRouter.get('/login', UserController.login);
UserRouter.post('login', UserController.login);

// Register Page
UserRouter.get('/register', UserController.register);
UserRouter.post('register', UserController.register);

// Account Page
UserRouter.get('/account', UserController.account);
UserRouter.post('account', UserController.account);

module.exports = UserRouter;
