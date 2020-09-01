const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    username: {
        type: String,
        required: true
    }, 
    messahe: {
        type: String,
        required: true
    }
});

const Messages = mongoose.model('Messages', messagesSchema);
module.exports = Messages;