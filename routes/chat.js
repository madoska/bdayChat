const express = require('express');
const chatRouter = express.Router();
const chatController = require('../controllers/chat');

/*chatRouter.get("/chat", chatController.getAll);*/
chatRouter.post("/chat", chatController.create);

module.exports = chatRouter;
