const express = require('express');
const usersRouter = express.Router();
const authController = require('../controllers/auth');

/* GET users listing. */
usersRouter.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

usersRouter.post('/signup', authController.signup);

//usersRouter.post('/login', authController.login);

module.exports = usersRouter;