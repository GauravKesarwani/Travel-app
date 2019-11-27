const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const { request } = require('./lib/request.js');
const { getImageDataFromApi, getCountryDetailFromApi } = require('./lib/utils.js');
const mockAPIResponse = require('./mockAPI.js');
const geonameUrl = 'http://api.geonames.org/postalCodeSearchJSON';
const darkskyUrl = 'https://api.darksky.net/forecast';
const pixabayUrl = 'https://pixabay.com/api/';

const travelResponse = {};
dotenv.config();
const app = express()

app.use(express.static('dist'))

// Cors for cross origin allowance
app.use(cors());

const darkskyKey = process.env.DARKSKY_API_KEY;
const pixabayKey = process.env.PIXABAY_API_KEY;

console.log('dark sky key', process.env.API_KEY);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    console.log('test api', console.log(req.query));

    const placename = req.query.placename;
    const username = req.query.username;
    let countryInfo = {};
    let fetchCountryInfo;

    if (placename) {
        const weatherDataPromise = request(`${geonameUrl}?placename=${placename}&username=${username}`)
            .then(function(res) {
                const locationInfo = res.postalCodes[0];
                const latitude = locationInfo.lat;
                const longitude = locationInfo.lng;
                countryInfo['countryCode'] = locationInfo.countryCode;
                fetchCountryInfo = getCountryDetailFromApi(`https://restcountries.eu/rest/v2/alpha/${countryInfo.countryCode}`);
                
                fetchCountryInfo.then((countryName) => {
                    travelResponse['country'] = countryName;
                });
                return request(`${darkskyUrl}/${darkskyKey}/${latitude},${longitude}`);
            })
            .catch((err) => { console.log(err) });
            
        
        const fetchImagePromise = getImageDataFromApi(`${pixabayUrl}?key=${pixabayKey}&q=${placename}&category=places`);

        Promise.all([weatherDataPromise, fetchImagePromise])
            .then((values) => {
                const weatherForecast = values[0];
                travelResponse['image'] = values[1];
                travelResponse['summary'] = weatherForecast.currently.summary;
                travelResponse['temperature'] = weatherForecast.currently.temperature;
               
                res.send({ data: travelResponse });
            });
    } else {
        res.send({
            "error": "invalid request"
        }) 
    }
});
