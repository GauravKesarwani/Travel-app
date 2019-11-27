const fetch = require('node-fetch');

function request(url) {
    return fetch(url)
        .then(res => res.json())
}

module.exports = { request };