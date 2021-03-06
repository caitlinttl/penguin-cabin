var express = require('express');
var router = express.Router();
const penguinsController = require('../controllers/penguins')
const newsController = require('../controllers/news')
const messageController = require('../controllers/message')

/* GET home page. */
router.get('/', (req, res) => res.render('pages/index'))

/* GET other pages. */
router.get('/map', (req, res) => res.render('pages/map'))
router.get('/news', newsController.news)
router.get('/message', messageController.message)
router.get('/caitlin', (req, res) => res.render('pages/caitlin'))

/* GET penguins page. */
router.get('/emperor', penguinsController.emperor)
router.get('/king', penguinsController.king)
router.get('/littleBlue', penguinsController.littleBlue)
router.get('/adelie', penguinsController.adelie)
router.get('/chinstrap', penguinsController.chinstrap)
router.get('/gentoo', penguinsController.gentoo)
router.get('/african', penguinsController.african)
router.get('/humboldt', penguinsController.humboldt)
router.get('/magellanic', penguinsController.magellanic)
router.get('/galapagos', penguinsController.galapagos)
router.get('/macaroni', penguinsController.macaroni)
router.get('/royal', penguinsController.royal)
router.get('/yellowEyed', penguinsController.yellowEyed)
router.get('/fiordland', penguinsController.fiordland)
router.get('/erectCrested', penguinsController.erectCrested)
router.get('/snares', penguinsController.snares)
router.get('/northernRockhopper', penguinsController.northernRockhopper)
router.get('/southernRockhopper', penguinsController.southernRockhopper)

/* GET edit penguin photo page. */
// TODO Add for Specified penguin
router.get('/add-penguin-photo', function(req, res, next) {
  res.render('pages/add-penguin-photo', { penguin: 'Specified' });
});

/* GET edit news page. */
router.get('/add-news', (req, res) => res.render('pages/add-news'))

/* GET edit message page. */
router.get('/add-message', (req, res) => res.render('pages/add-message'))

/* POST add data to database. */
router.post('/add-penguin-photo', penguinsController.addPenguinPhoto)
router.post('/add-news', newsController.addNews)
router.post('/add-message', messageController.addMessage)


module.exports = router;
