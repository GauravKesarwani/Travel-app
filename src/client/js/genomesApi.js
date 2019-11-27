const baseUrl = 'http://api.geonames.org/postalCodeSearchJSON?';
const username = '57fdb6608943cfe4cbbd4895c332a0d3';

import request from './request';

async function fetchDataFromGenomesApi (baseUrl, zip, apiKey) {
    const resp = await request(`${baseUrl}?placename=${placename}&username=${username}`)
    const resp = await fetch();
    console.log(resp.json());
    return resp.json();
}


const submitBtm = document.getElementById('submit-btn');
submitBtn.addEventListener('click', handleClick);