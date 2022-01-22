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

  addNews: (async (news) => {
    newsTitle = news['news_title']
    newsUrl = news['news_url']
    newsPhotoUrl = news['news_photo_url']
    newsContent = news['news_content']
    newsTags = news['news_tags']

    console.log(newsTitle)
    console.log(newsUrl)
    console.log(newsPhotoUrl)
    console.log(newsContent)
    console.log(newsTags)

    var data = await addNewsData(docID, sheetID, newsTitle, newsUrl, newsPhotoUrl, newsContent, newsTags);
  }),
  
}
  
module.exports = newsModel

