const express = require('express');
const chatRouter = express.Router();
const chatController = require('../controllers/chat');

/* GET home page. */
chatRouter.get('/chat', function(req, res, next) {
  res.render('chat', { title: 'B.day' });
});

module.exports = chatRouter;
