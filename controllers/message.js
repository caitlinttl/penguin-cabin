// import message data from model
const messageModel = require('../models/message')
const getClientIpModel = require('../models/getClientIp')

const messageController = {
  message: (async (req, res) => {
    const message = await messageModel.message()
    res.render('pages/message', { message: message })
  }),

  addMessage: (async (req, res) => {
    var message = req.body
    const clientIp = getClientIpModel.getClientIp(req)
    const addMessage = await messageModel.addMessage(message, clientIp)
    res.redirect('/message')
  }),
}

module.exports = messageController