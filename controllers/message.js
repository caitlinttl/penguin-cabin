// import message data from model
const messageModel = require('../models/message')

const messageController = {
  message: (async (req, res) => {
    const message = await messageModel.message()
    res.render('pages/message', { message: message })
  }),

}

module.exports = messageController