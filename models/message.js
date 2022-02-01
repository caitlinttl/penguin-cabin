// message.js
// getdata from google sheet

const moment = require('moment-timezone');

const { readMessageData } = require('./googleSheet.js');
const { addMessageData } = require('./googleSheet.js');
const lineNotifyModel = require('./lineNotify.js');

// function sanitize(input) {
//   return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
// }

const docID = '1pk2LOyFakukUv1-ew1Bnt0Du5vHqMzyKteebQMaK8EQ'
const sheetID = '717436060'

const messageModel = {
  
  message: (async () => {
    var data = await readMessageData(docID, sheetID);
    console.log('message')
    console.log(data)
    // Not entirely sure the message model here... but try it.
    // Seems to be [0], [1], [2]
    // return data.map(datum => sanitize(datum));
    return data
  }),

  addMessage: (async (message, clientIp) => {
    userName = message['user_name']
    userMessage = message['user_message']
    timestamp = moment().tz("Asia/Taipei").format("YYYY-MM-DD HH:mm");
    clientIp = clientIp

    console.log(userName)
    console.log(userMessage)
    console.log(timestamp)
    console.log(clientIp)

    var notify = lineNotifyModel.messageNotify(userName, timestamp, clientIp);
    var data = await addMessageData(docID, sheetID, userName, userMessage, timestamp, clientIp);
  }),

}
  
module.exports = messageModel

