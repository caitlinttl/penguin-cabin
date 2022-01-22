// import news data from model
const newsModel = require('../models/news')

const newsController = {
    news: (async (req, res) => {
    const news = await newsModel.news()
    res.render('pages/news', { news: news })
  }),

}

module.exports = newsController