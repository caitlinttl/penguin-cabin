// penguins.js
// getdata from google sheet

const { readPenguinPhotoData } = require('./googleSheet.js');
const { addPenguinPhotoData } = require('./googleSheet.js');

const docID = '1oeyw47FDn__ywBEOvuxGvero-pvUQhrY1TpeD25gYgM'
const sheetIDs = {
  'emperor': '0',
  'king': '987483243',
  'littleBlue': '848203373',
  'adelie': '1436636180',
  'chinstrap': '254626704',
  'gentoo': '1598528042',
  'african': '391017347',
  'humboldt': '1977125759',
  'magellanic': '572466856',
  'galapagos': '279729496',
  'macaroni': '1737562674',
  'royal': '1812177932',
  'yellowEyed': '1038869717',
  'fiordland': '116309256',
  'erectCrested': '510003497',
  'snares': '310715587',
  'northernRockhopper': '1094012889',
  'southernRockhopper': '124145510'
}

const penguinsPhotoModel = {
  
  emperor: (async () => {
    var sheetID = sheetIDs['emperor']
    var data = await readPenguinPhotoData(docID, sheetID);
    console.log('emperor')
    console.log(data)
    return data
  }),

  king: (async () => {
    var sheetID = sheetIDs['king']
    var data = await readPenguinPhotoData(docID, sheetID);
    console.log('king')
    console.log(data)
    return data
  }),

  littleBlue: (async () => {
    var sheetID = sheetIDs['littleBlue']
    var data = await readPenguinPhotoData(docID, sheetID);
    console.log('littleBlue')
    console.log(data)
    return data
  }),

  adelie: (async () => {
    var sheetID = sheetIDs['adelie']
    var data = await readPenguinPhotoData(docID, sheetID);
    console.log('adelie')
    console.log(data)
    return data
  }),

  chinstrap: (async () => {
    var sheetID = sheetIDs['chinstrap']
    var data = await readPenguinPhotoData(docID, sheetID);
    console.log('chinstrap')
    console.log(data)
    return data
  }),

  gentoo: (async () => {
    var sheetID = sheetIDs['gentoo']
    var data = await readPenguinPhotoData(docID, sheetID);
    console.log('gentoo')
    console.log(data)
    return data
  }),

  african: (async () => {
    var sheetID = sheetIDs['african']
    var data = await readPenguinPhotoData(docID, sheetID);
    console.log('african')
    console.log(data)
    return data
  }),

  humboldt: (async () => {
    var sheetID = sheetIDs['humboldt']
    var data = await readPenguinPhotoData(docID, sheetID);
    console.log('humboldt')
    console.log(data)
    return data
  }),

  magellanic: (async () => {
    var sheetID = sheetIDs['magellanic']
    var data = await readPenguinPhotoData(docID, sheetID);
    console.log('magellanic')
    console.log(data)
    return data
  }),

  galapagos: (async () => {
    var sheetID = sheetIDs['galapagos']
    var data = await readPenguinPhotoData(docID, sheetID);
    console.log('galapagos')
    console.log(data)
    return data
  }),

  macaroni: (async () => {
    var sheetID = sheetIDs['macaroni']
    var data = await readPenguinPhotoData(docID, sheetID);
    console.log('macaroni')
    console.log(data)
    return data
  }),

  royal: (async () => {
    var sheetID = sheetIDs['royal']
    var data = await readPenguinPhotoData(docID, sheetID);
    console.log('royal')
    console.log(data)
    return data
  }),

  yellowEyed: (async () => {
    var sheetID = sheetIDs['yellowEyed']
    var data = await readPenguinPhotoData(docID, sheetID);
    console.log('yellowEyed')
    console.log(data)
    return data
  }),

  fiordland: (async () => {
    var sheetID = sheetIDs['fiordland']
    var data = await readPenguinPhotoData(docID, sheetID);
    console.log('fiordland')
    console.log(data)
    return data
  }),

  erectCrested: (async () => {
    var sheetID = sheetIDs['erectCrested']
    var data = await readPenguinPhotoData(docID, sheetID);
    console.log('erectCrested')
    console.log(data)
    return data
  }),

  snares: (async () => {
    var sheetID = sheetIDs['snares']
    var data = await readPenguinPhotoData(docID, sheetID);
    console.log('snares')
    console.log(data)
    return data
  }),

  northernRockhopper: (async () => {
    var sheetID = sheetIDs['northernRockhopper']
    var data = await readPenguinPhotoData(docID, sheetID);
    console.log('northernRockhopper')
    console.log(data)
    return data
  }),

  southernRockhopper: (async () => {
    var sheetID = sheetIDs['southernRockhopper']
    var data = await readPenguinPhotoData(docID, sheetID);
    console.log('southernRockhopper')
    console.log(data)
    return data
  }),

  addPenguinPhoto: (async (penguin, clientIp) => {
    penguinKind = penguin['penguin_kind']
    photoUrl = penguin['penguin_photo']
    penguinPhotoContributor = penguin['penguin_photo_contributor']
    clientIp = clientIp

    console.log(penguinKind)
    console.log(photoUrl)
    console.log(clientIp)
    console.log(penguinPhotoContributor)

    var sheetID = sheetIDs[penguinKind]
    var data = await addPenguinPhotoData(docID, sheetID, photoUrl, penguinPhotoContributor, clientIp);
  }),

}
  
module.exports = penguinsPhotoModel

