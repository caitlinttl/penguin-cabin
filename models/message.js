// message.js
// getdata from google sheet

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


}
  
module.exports = messageModel

