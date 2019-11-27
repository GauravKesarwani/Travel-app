import { handleSubmit } from './js/formHandler'
import './styles/resets.scss';
import './styles/form.scss';


const submitBtn = document.getElementById('submit-btn');
const inputEl = document.getElementById('placename');
const inputValue = inputEl.value;
submitBtn.addEventListener('click', () => handleSubmit(inputValue));
