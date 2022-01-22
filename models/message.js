// message.js
// getdata from google sheet

const moment = require('moment-timezone');

const { readMessageData } = require('./googleSheet.js');
const { addMessageData } = require('./googleSheet.js');


const docID = '1pk2LOyFakukUv1-ew1Bnt0Du5vHqMzyKteebQMaK8EQ'
const sheetID = '717436060'

const messageModel = {
  
  message: (async () => {
    var data = await readMessageData(docID, sheetID);
    console.log('message')
    console.log(data)
    return data
  }),

  addMessage: (async (message) => {
    userName = message['user_name']
    userMessage = message['user_message']
    timestamp = moment().tz("Asia/Taipei").format("YYYY-MM-DD HH:mm");

    console.log(userName)
    console.log(userMessage)
    console.log(timestamp)

    var data = await addMessageData(docID, sheetID, userName, userMessage, timestamp);
  }),

}
  
module.exports = messageModel

