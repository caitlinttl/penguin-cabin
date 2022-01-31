// import penguins data from model
const penguinsPhotoModel = require('../models/penguins')
const getClientIpModel = require('./getClientIp')
const bodyParser = require('body-parser')

const penguinsController = {
  emperor: (async (req, res) => {
    const emperor = await penguinsPhotoModel.emperor()
    res.render('pages/penguins/emperor', { photoUrl: emperor })
  }),

  king: (async (req, res) => {
    const king = await penguinsPhotoModel.king()
    res.render('pages/penguins/king', { photoUrl: king })
  }),

  littleBlue: (async (req, res) => {
    const littleBlue = await penguinsPhotoModel.littleBlue()
    res.render('pages/penguins/littleBlue', { photoUrl: littleBlue })
  }),

  adelie: (async (req, res) => {
    const adelie = await penguinsPhotoModel.adelie()
    res.render('pages/penguins/adelie', { photoUrl: adelie })
  }),

  chinstrap: (async (req, res) => {
    const chinstrap = await penguinsPhotoModel.chinstrap()
    res.render('pages/penguins/chinstrap', { photoUrl: chinstrap })
  }),

  gentoo: (async (req, res) => {
    const gentoo = await penguinsPhotoModel.gentoo()
    res.render('pages/penguins/gentoo', { photoUrl: gentoo })
  }),

  african: (async (req, res) => {
    const african = await penguinsPhotoModel.african()
    res.render('pages/penguins/african', { photoUrl: african })
  }),

  humboldt: (async (req, res) => {
    const humboldt = await penguinsPhotoModel.humboldt()
    res.render('pages/penguins/humboldt', { photoUrl: humboldt })
  }),

  magellanic: (async (req, res) => {
    const magellanic = await penguinsPhotoModel.magellanic()
    res.render('pages/penguins/magellanic', { photoUrl: magellanic })
  }),

  galapagos: (async (req, res) => {
    const galapagos = await penguinsPhotoModel.galapagos()
    res.render('pages/penguins/galapagos', { photoUrl: galapagos })
  }),

  macaroni: (async (req, res) => {
    const macaroni = await penguinsPhotoModel.macaroni()
    res.render('pages/penguins/macaroni', { photoUrl: macaroni })
  }),

  royal: (async (req, res) => {
    const royal = await penguinsPhotoModel.royal()
    res.render('pages/penguins/royal', { photoUrl: royal })
  }),

  yellowEyed: (async (req, res) => {
    const yellowEyed = await penguinsPhotoModel.yellowEyed()
    res.render('pages/penguins/yellowEyed', { photoUrl: yellowEyed })
  }),

  fiordland: (async (req, res) => {
    const fiordland = await penguinsPhotoModel.fiordland()
    res.render('pages/penguins/fiordland', { photoUrl: fiordland })
  }),

  erectCrested: (async (req, res) => {
    const erectCrested = await penguinsPhotoModel.erectCrested()
    res.render('pages/penguins/erectCrested', { photoUrl: erectCrested })
  }),

  snares: (async (req, res) => {
    const snares = await penguinsPhotoModel.snares()
    res.render('pages/penguins/snares', { photoUrl: snares })
  }),

  northernRockhopper: (async (req, res) => {
    const northernRockhopper = await penguinsPhotoModel.northernRockhopper()
    res.render('pages/penguins/northernRockhopper', { photoUrl: northernRockhopper })
  }),

  southernRockhopper: (async (req, res) => {
    const southernRockhopper = await penguinsPhotoModel.southernRockhopper()
    res.render('pages/penguins/southernRockhopper', { photoUrl: southernRockhopper })
  }),

  addPenguinPhoto: (async (req, res) => {
    var penguin = req.body
    const clientIp = getClientIpModel.getClientIp(req)
    const addPenguinPhoto = await penguinsPhotoModel.addPenguinPhoto(penguin, clientIp)
    res.redirect('/'+ penguin['penguin_kind'])
  }),


}

module.exports = penguinsController