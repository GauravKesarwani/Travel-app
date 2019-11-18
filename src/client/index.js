import { handleSubmit } from './js/formHandler'
import './styles/resets.scss';


const submitBtn = document.getElementById('submit-btn');
const inputEl = document.getElementById('name');
const inputValue = inputEl.value;
submitBtn.addEventListener('click', () => handleSubmit(inputValue));
