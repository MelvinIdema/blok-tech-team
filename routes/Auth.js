const express = require('express');
const AuthController = require('./../app/controllers/AuthController.js');
const passport = require('passport');

const AuthRouter = express.Router();

AuthRouter.get('/login', AuthController.login);
AuthRouter.post(
  '/login',
  passport.authenticate('local', {
    successReturnToOrRedirect: '/',
    failureRedirect: '/login',
    failureMessage: true,
  })
);

AuthRouter.get('/logout', AuthController.logout);

module.exports = AuthRouter;
