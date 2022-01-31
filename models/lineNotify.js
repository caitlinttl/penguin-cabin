// lineNotify.js

const axios = require('axios');

const ifttt_key = 'cgcFQMktW46bFG9exR5nta'
const url_ifttt = 'https://maker.ifttt.com/trigger/get_weather/with/key/' + ifttt_key + '?value1='



const lineNotifyModel = {
    messageNotify: (userName, timestamp, clientIp) => {

        var message_to_send = 
        '--Penguin Cabin--<br>' + 
        timestamp + '<br>' +
        'New message notify.' + '<br><br>' +
        'Name: ' + userName + '<br>' +
        'IP: ' + clientIp + '<br>' +
        'Url: ' + 'https://penguincabin.herokuapp.com/message'
        
        const encodedURI = encodeURI(message_to_send);
        axios.get(url_ifttt + encodedURI)
        // .then( (response) => console.log(response))
        // .catch( (error) => console.log(error))
    },
  
    newsNotify: (newsTitle, timestamp, clientIp) => {

        var message_to_send = 
        '--Penguin Cabin--<br>' + 
        timestamp + '<br>' +
        'New News notify.' + '<br><br>' +
        'Title: ' + newsTitle + '<br>' +
        'IP: ' + clientIp + '<br>' +
        'Url: ' + 'https://penguincabin.herokuapp.com/news' 
        
        const encodedURI = encodeURI(message_to_send);
        axios.get(url_ifttt + encodedURI)
    },
  
    penguinPhotoNotify: (penguinKind, timestamp, clientIp) => {

        var message_to_send = 
        '--Penguin Cabin--<br>' + 
        timestamp + '<br>' +
        'New penguin photo notify.' + '<br><br>' +
        'Penguin: ' + penguinKind + '<br>' +
        'IP: ' + clientIp + '<br>' +
        'Url: ' + 'https://penguincabin.herokuapp.com/'+ penguinKind
        
        const encodedURI = encodeURI(message_to_send);
        axios.get(url_ifttt + encodedURI)
    },
  
  }
    
  module.exports = lineNotifyModel