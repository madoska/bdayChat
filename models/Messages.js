const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Messages = new Schema({
    username: {
        type: String,
        required: true
    }, 
    message: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Messages', Messages);