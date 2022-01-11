const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'frontend')))
    .get('/', (req, res) => {    
        var options = {
            root: __dirname,    
            headers: {
            "Content-Type": "text/html"
            }
        }
        res.sendFile('./frontend/index.html',options, function(error){
            if(error){
                console.log('Sent failed:', 'index.html' + error);
            }else{
                console.log('Sent sucess:', 'index.html');
            }
        });
    })
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))


