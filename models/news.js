// news.js
// getdata from google sheet

const moment = require('moment-timezone');

const { readNewsData } = require('./googleSheet.js');
const { addNewsData } = require('./googleSheet.js');
const lineNotifyModel = require('./lineNotify.js');

const docID = '1pk2LOyFakukUv1-ew1Bnt0Du5vHqMzyKteebQMaK8EQ'
const sheetID = '0'

// Ban IP
const banIpArr = ["188.126.89.89", "188.126.89.46"]
// ::ffff:127.0.0.1

const newsModel = {
  
  news: (async () => {
    var data = await readNewsData(docID, sheetID);
    console.log('news')
    console.log(data)
    return data
  }),

  addNews: (async (news, clientIp) => {
    newsTitle = news['news_title']
    newsUrl = news['news_url']
    newsPhotoUrl = news['news_photo_url']
    newsContent = news['news_content']
    newsTags = news['news_tags']
    newsContributor = news['news_contributor']
    clientIp = clientIp
    timestamp = moment().tz("Asia/Taipei").format("YYYY-MM-DD HH:mm:ss");

    console.log(newsTitle)
    console.log(newsUrl)
    console.log(newsPhotoUrl)
    console.log(newsContent)
    console.log(newsTags)
    console.log(newsContributor)
    console.log(clientIp)
    console.log(timestamp)

    var notify = lineNotifyModel.newsNotify(newsTitle, timestamp, clientIp);
    if (banIpArr.includes(clientIp)) {return;}
    var data = await addNewsData(docID, sheetID, newsTitle, newsUrl, newsPhotoUrl, newsContent, newsTags, newsContributor, clientIp, timestamp);
  }),
  
}
  
module.exports = newsModel

