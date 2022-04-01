const express = require('express');
const upload = require('../app/services/S3.js');
const UserController = require('./../app/controllers/UserController.js');

const UserRouter = express.Router();

// Login Page
UserRouter.get('/login', UserController.login);
UserRouter.post('/login', UserController.login);

// Register Page
UserRouter.get('/register/:step?', UserController.register);
UserRouter.post(
  '/register/:step?',
  upload.array('avatar'),
  UserController.register
);

// Account Page
UserRouter.get('/account', UserController.account);
UserRouter.post('/account', upload.array('avatar'), UserController.account);

// Logout
UserRouter.get('/logout', UserController.logout);

module.exports = UserRouter;
