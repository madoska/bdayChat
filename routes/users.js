const express = require('express');
const usersRouter = express.Router();
const authController = require('../controllers/auth');

/* GET users listing. */
usersRouter.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*// redirect to corerct page
usersRouter.get('/signup', function(req, res, next) {
  res.render('signup', {title: 'Signup'});
});

usersRouter.get('/login', function(req, res, next) {
  res.render('login', {title: 'Login'});
});*/

// post data to corresponding controller function
usersRouter.post('/signup', authController.signup);

usersRouter.post('/login', authController.login);

module.exports = usersRouter;