// googleSheet.js
// Tutorial: https://ithelp.ithome.com.tw/articles/10234325

const { GoogleSpreadsheet } = require('google-spreadsheet');

/**
 * @param  {String} docID the document ID
 * @param  {String} sheetID the google sheet table ID
 * @param  {String} credentialsPath the credentials path defalt is './credentials.json'
 */


async function readPenguinPhotoData(docID, sheetID, credentialsPath = './penguin-cabin-credentials.json') {
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

async function readNewsData(docID, sheetID, credentialsPath = './penguin-cabin-credentials.json') {
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

    for (r of result) {
      if ( !r[2] ) {
        r[2] = 'images/news_default_penguin.jpg'
      }
    }

    return result.reverse();
};

async function readMessageData(docID, sheetID, credentialsPath = './penguin-cabin-credentials.json') {
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
    return result;
};


async function addPenguinPhotoData(docID, sheetID, credentialsPath = './penguin-cabin-credentials.json') {
  const result = [];
  const doc = new GoogleSpreadsheet(docID);
  const creds = require(credentialsPath);
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  const sheet = doc.sheetsById[sheetID];
  //   console.log(rows)
  const rows = await sheet.getRows();

// addRow
  const larryRow = await sheet.addRow({ Title: 'Larry Page', Url: 'larry@google.com' });
  const moreRows = await sheet.addRows([
      { Title: 'Sergey Brin', Photo: 'sergey@google.com' },
      { Title: 'Eric Schmidt', Tagsddd: 'eric@google.com' },
  ]);

  return result;
};

module.exports = {
  readPenguinPhotoData,
  readNewsData,
  readMessageData,
  addPenguinPhotoData,
  // addNewsData,
  // addMessageData,
};

