const { request } = require('./request');

async function getImageDataFromApi(url) {
    try {
        console.log('pixa bay url', url);
        const resp = await request(url);
        console.log('image json', resp.hits[0].largeImageURL);
        return resp.hits[0].largeImageURL;
    } catch (error) {
        console.log(`Error fetching image from api ${error}`);
    }
    return resp.hits[0].largeImageURL;
}

async function getCountryDetailFromApi(url) {
    try {
        console.log('country detail api', url);
        const resp = await request(url);

        console.log(resp.name);
        return resp.name;
    } catch (error) {
        console.log(`error from rest countries api ${error}`);
    }
}

module.exports = {
    getCountryDetailFromApi,
    getImageDataFromApi
};