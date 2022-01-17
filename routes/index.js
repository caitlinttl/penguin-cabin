var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => res.render('pages/index'))

/* GET other pages. */
router.get('/map', (req, res) => res.render('pages/map'))
router.get('/news', (req, res) => res.render('pages/news'))
router.get('/message', (req, res) => res.render('pages/message'))

/* GET edit penguins photo page. */
// TODO Add for Specified penguin
router.get('/add-pengins-photo', function(req, res, next) {
  res.render('pages/add-pengins-photo', { penguin: 'Specified' });
});

/* GET edit news page. */
router.get('/add-news', (req, res) => res.render('pages/add-news'))

/* GET edit message page. */
router.get('/add-message', (req, res) => res.render('pages/add-message'))

/* GET edit penguins page. */
router.get('/emperor', (req, res) => res.render('pages/penguins/emperor'))
router.get('/king', (req, res) => res.render('pages/penguins/king'))
router.get('/littleBlue', (req, res) => res.render('pages/penguins/littleBlue'))
router.get('/adelie', (req, res) => res.render('pages/penguins/adelie'))
router.get('/chinstrap', (req, res) => res.render('pages/penguins/chinstrap'))
router.get('/gentoo', (req, res) => res.render('pages/penguins/gentoo'))
router.get('/african', (req, res) => res.render('pages/penguins/african'))
router.get('/humboldt', (req, res) => res.render('pages/penguins/humboldt'))
router.get('/magellanic', (req, res) => res.render('pages/penguins/magellanic'))
router.get('/galapagos', (req, res) => res.render('pages/penguins/galapagos'))
router.get('/macaroni', (req, res) => res.render('pages/penguins/macaroni'))
router.get('/royal', (req, res) => res.render('pages/penguins/royal'))
router.get('/yellowEyed', (req, res) => res.render('pages/penguins/yellowEyed'))
router.get('/fiordland', (req, res) => res.render('pages/penguins/fiordland'))
router.get('/erectCrested', (req, res) => res.render('pages/penguins/erectCrested'))
router.get('/snares', (req, res) => res.render('pages/penguins/snares'))
router.get('/northernRockhopper', (req, res) => res.render('pages/penguins/northernRockhopper'))
router.get('/southernRockhopper', (req, res) => res.render('pages/penguins/southernRockhopper'))



module.exports = router;
