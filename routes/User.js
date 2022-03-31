const express = require('express');
const upload = require('../app/services/S3.js');
const UserController = require('./../app/controllers/UserController.js');

const UserRouter = express.Router();

// Login Page
UserRouter.get('/login', UserController.login);
UserRouter.post('/login', UserController.login);

// Register Page
UserRouter.get('/register', UserController.register);
UserRouter.post('/register', upload.array('avatar'), UserController.register);

// Register1 Page
UserRouter.get('/register1', UserController.register1);
UserRouter.post('/register1', UserController.register1);

// Register2 Page
UserRouter.get('/register2', UserController.register2);
UserRouter.post('/register2', UserController.register2);

// Registeroverzicht Page
UserRouter.get('/registeroverview', UserController.registeroverview);
UserRouter.post('/registeroverview', UserController.registeroverview);

// Account Page
UserRouter.get('/account', UserController.account);
UserRouter.post('/account', upload.array('avatar'), UserController.account);

// Logout
UserRouter.get('/logout', UserController.logout);

module.exports = UserRouter;
