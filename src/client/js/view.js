const summaryEl = document.querySelector('.summary');
const temperatureEl = document.querySelector('.temperature');
const imageContainer = document.querySelector('.entity-right');

export function populateUI(data) {
    summaryEl.textContent = data.summary;
    temperatureEl.textContent = data.temperature;

    const imageEl = document.createElement('img');
    imageEl.classList.add('destination-img');
    imageEl.setAttribute('src', data.image);

    imageContainer.appendChild(imageEl);
}