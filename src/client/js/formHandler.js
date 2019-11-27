import { request } from './request';
import { populateUI } from './view';


const baseUrl = 'http://localhost:8080/test';
const username = 'gauravkesarwani';
const darkskySecretKey = '52eb506b09a9f2e3c21a05ee3f64d480';

const resultEl = document.getElementById('results');
const inputEl = document.getElementById('placename');


function handleSubmit() {
    // Todo: replace this with form validation
    if (true) {
        console.log("::: Form Submitted :::")
        const placename = inputEl.value;
        // call the geonames api
        request(`${baseUrl}?placename=${placename}&username=${username}`)
            .then(function (res) {
                populateUI(res.data);
            });
        
        return true;
    } else {
        if (resultEl) {
            results.innerHTML = '<p>Please enter a valid url</p>';
        }
        return false;
    }

   
}

export { handleSubmit }
