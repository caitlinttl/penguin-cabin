// import message data from model
const messageModel = require('../models/message')

const messageController = {
  message: (async (req, res) => {
    const message = await messageModel.message()
    res.render('pages/message', { message: message })
  }),

  addMessage: (async (req, res) => {
    var message = req.body
    const addMessage = await messageModel.addMessage(message)
    res.redirect('/message')
  }),
}

module.exports = messageController