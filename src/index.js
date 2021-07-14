import toEnName from 'arabic-name-to-en';
import './styles.css';

const textareaField = document.querySelector('#textarea');
const submitButton = document.querySelector('#submit');
const resultDiv = document.querySelector('#result');

const romanize = e => {
  e.preventDefault();

  resultDiv.innerHTML = toEnName(textareaField.value);
};

submitButton.addEventListener('click', romanize);
