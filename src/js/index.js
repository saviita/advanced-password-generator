// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const passwordElement = document.getElementById('password');
const lengthElement = document.getElementById('length');
const rangeElement = document.getElementById('range');
const btnElement = document.getElementById('btn');

// LENGTH
lengthElement.textContent = rangeElement.value;

const printLength = () => {
  lengthElement.textContent = rangeElement.value;
};
rangeElement.addEventListener('input', printLength);

const upperCheckElement = document.getElementById('uppercase');
const lowerCheckElement = document.getElementById('lowercase');
const numbersCheckElement = document.getElementById('numbers');
const symbolsCheckElement = document.getElementById('symbols');

//ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/
/* const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
const numbersCharacters = '0123456789';
const symbolsCharacters = '!@#$%^&*()_+-={}[]:;<>,.?/'; */

const passwordOptions = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-={}[]:;<>,.?/'
};

let characters = '';
let password = '';

//DESACTIVAR BOTÓN

const getDisabledButton = () => {
  //Esto sirve para desactivar el boton si no hay elementos en el string
  btnElement.disabled = !characters.length;
};

//AÑADIR CARACTERES

const getCharacters = event => {
  //Otra opcion para desactivar el botón:
  //if (checboxes === 0) { return; }

  // Es igual if (even.target.id === 'uppercase')
  /* if (upperCheckElement.checked) {
    characters += uppercaseCharacters;
  }
  if (lowerCheckElement.checked) {
    characters += lowercaseCharacters;
  }
  if (numbersCheckElement.checked) {
    characters += numbersCharacters;
  }
  if (symbolsCheckElement.checked) {
    characters += symbolsCharacters;
  } */

  characters = '';

  // guarda en un 'array' los checked
  const checkboxes = document.querySelectorAll('input:checked');
  checkboxes.forEach(input => (characters += passwordOptions[input.id]));

  getDisabledButton();
};
upperCheckElement.addEventListener('change', getCharacters);
lowerCheckElement.addEventListener('change', getCharacters);
numbersCheckElement.addEventListener('change', getCharacters);
symbolsCheckElement.addEventListener('change', getCharacters);

//PASSWORD

const getPassword = () => {
  /*   if (upperCheckElement.checked) {
    characters += uppercaseCharacters;
    } */

  password = '';

  for (let index = 0; index < rangeElement.value; index++) {
    const randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomNumber);
  }

  passwordElement.value = password;
};
btnElement.addEventListener('click', getPassword);

//
// MI VERSIÓN_____________________________________
/* let password = '';
const getPassword = () => {

  if (upperCheckElement.checked) {
    characters.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  }

  if (lowerCheckElement.checked) {
    characters.push('abcdefghijklmnopqrstuvwxyz')
  }

  if (numbersCheckElement.checked) {
    characters.push('0123456789')
  }

  if (symbolsCheckElement.checked) {
    characters.push('!@#$%^&*()_+-={}[]:;<>,.?/')
  }
  console.log(characters)

  const stringCharacters = characters.reduce((acc, letters) => {return acc + letters;})
  console.log(stringCharacters)

  password = '';
  for (let index = 0; index < rangeElement.value; index++) {
    const randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomNumber);
  }
  
  console.log(characters)
  passwordElement.value = password;
};
btnElement.addEventListener('click', getPassword); */
