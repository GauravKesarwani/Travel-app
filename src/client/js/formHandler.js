import { validateUrl } from './urlChecker'
import { request } from './request';

const baseUrl = 'http://localhost:8080/test';

const resultEl = document.getElementById('results');
const polarityConfidence = document.getElementById('polarity_confidence');
const polarityText = document.getElementById('polarity_text');
const polarity = document.getElementById('polarity');


function handleSubmit(url) {
    if (validateUrl(url)) {
        console.log("::: Form Submitted :::")
        request(`${baseUrl}/?url=${url}`)
            .then(function (res) {
                polarity.innerHTML = res.message.polarity;
                polarityConfidence.innerHTML = res.message.polarity_confidence;
                polarityText.innerHTML = res.message.text;
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
