// googleSheet.js
// Tutorial: https://ithelp.ithome.com.tw/articles/10234325

const { GoogleSpreadsheet } = require('google-spreadsheet');

/**
 * @param  {String} docID the document ID
 * @param  {String} sheetID the google sheet table ID
 * @param  {String} credentialsPath the credentials path defalt is './credentials.json'
 */

 const keyPath = './penguin-cabin-credentials.json'

async function readPenguinPhotoData(docID, sheetID, credentialsPath=keyPath) {
    const result = [];
    const doc = new GoogleSpreadsheet(docID);
    const creds = require(credentialsPath);
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsById[sheetID];

    // getRows
    const rows = await sheet.getRows();
    for (row of rows) {
    result.push(row.penguin_photo_url);
    }
    return result;
};

async function readNewsData(docID, sheetID, credentialsPath=keyPath) {
    const result = [];
    const doc = new GoogleSpreadsheet(docID);
    const creds = require(credentialsPath);
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsById[sheetID];

    // getRows
    const rows = await sheet.getRows();
    for (row of rows) {
    result.push(row._rawData);
    }

    // set default for new photo
    for (r of result) {
      if ( !r[2] ) {
        r[2] = 'images/news_default_penguin.jpg'
      }
    }

    // reverse order
    return result.reverse();
};

async function readMessageData(docID, sheetID, credentialsPath=keyPath) {
    var result = [];
    const doc = new GoogleSpreadsheet(docID);
    const creds = require(credentialsPath);
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const sheet = doc.sheetsById[sheetID];

    // getRows
    const rows = await sheet.getRows();
    for (row of rows) {
    result.push(row._rawData);
    }

    // reserve top and reverse order
    top = result[0]
    result.shift()
    result = result.reverse()
    result.unshift(top)

    return result;
};


async function addPenguinPhotoData(docID, sheetID, photoUrl, credentialsPath=keyPath) {
  const doc = new GoogleSpreadsheet(docID);
  const creds = require(credentialsPath);
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  const sheet = doc.sheetsById[sheetID];

// addRow
  const moreRows = await sheet.addRows([
      { penguin_photo_url: photoUrl }
  ]);

};

async function addNewsData(docID, sheetID, newsTitle, newsUrl, newsPhotoUrl, newsContent, newsTags, credentialsPath=keyPath) {
  const doc = new GoogleSpreadsheet(docID);
  const creds = require(credentialsPath);
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  const sheet = doc.sheetsById[sheetID];
  
  // addRow
  const moreRows = await sheet.addRows([
    { news_title: newsTitle, news_url: newsUrl, news_photo_url: newsPhotoUrl, news_content: newsContent, news_tags: newsTags },
  ]);

};

async function addMessageData(docID, sheetID, userName, userMessage, timestamp, credentialsPath=keyPath) {
  const doc = new GoogleSpreadsheet(docID);
  const creds = require(credentialsPath);
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  const sheet = doc.sheetsById[sheetID];

// addRow
  const moreRows = await sheet.addRows([
    { user_name: userName, user_message: userMessage, timestamp: timestamp},
  ]);

};

module.exports = {
  readPenguinPhotoData,
  readNewsData,
  readMessageData,
  addPenguinPhotoData,
  addNewsData,
  addMessageData,

};
