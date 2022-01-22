// import news data from model
const newsModel = require('../models/news')

const newsController = {
  news: (async (req, res) => {
    const news = await newsModel.news()
    res.render('pages/news', { news: news })
  }),

  addNews: (async (req, res) => {
    var news = req.body
    const addNews = await newsModel.addNews(news)
    res.redirect('/news')
  }),
}

module.exports = newsController