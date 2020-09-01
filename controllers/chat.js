const Chat = require('../models/Messages')

const create = (req, res, next) => {
    let chat = new Chat()
    chat.text = req.body.text
    chat.save((err, doc) => {
        if (err) {
            res.json({
                "status": "error",
                "message": "Failed to save message"
            })
        }

        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "chat": doc
                }
            })
        }
    })
}

module.exports.create = create;