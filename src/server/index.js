//const path = require('path');
const express = require('express');
const cors = require('cors');
const aylien = require('aylien_textapi');
const dotenv = require('dotenv');
const mockAPIResponse = require('./mockAPI.js');

dotenv.config();
const app = express()

app.use(express.static('dist'))

// Cors for cross origin allowance
app.use(cors());

console.log(__dirname)
console.log('key', process.env.API_KEY);

var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    console.log('test api', console.log(req.query));

    const url = req.query.url;
    if (url) {
        textapi.sentiment({ url }, function (error, response) {
            if (error === null) {
                res.send({
                    "message": response,
                })
            } else {
                res.send({
                    "error": error
                })
            }
        });
    } else {
        res.send({
            "error": "invalid URL"
        })
    };
})
