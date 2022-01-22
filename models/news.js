// news.js
// getdata from google sheet

const { readNewsData } = require('./googleSheet.js');
const { addNewsData } = require('./googleSheet.js');

const docID = '1pk2LOyFakukUv1-ew1Bnt0Du5vHqMzyKteebQMaK8EQ'
const sheetID = '0'

const newsModel = {
  
  news: (async () => {
    var data = await readNewsData(docID, sheetID);
    console.log('news')
    console.log(data)
    return data
  }),


}
  
module.exports = newsModel

