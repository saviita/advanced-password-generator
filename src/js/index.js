// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const passwordElement = document.getElementById('password');
const lengthElement = document.getElementById('length');
const rangeElement = document.getElementById('range');
const btnElement = document.getElementById('btn');


let password = '';

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

//UPPERCASE
const addUppercase = event => {
  upperCheckElement.checked === true
  console.log(characters.toString()) 
}
upperCheckElement.addEventListener('input', addUppercase)

//LOWERCASE
const addLowercase = event => {
  lowerCheckElement.checked === true
  console.log(characters.toString()) 
}
lowerCheckElement.addEventListener('click', addLowercase)

//NUMBERS
const addNumbers = event => {
  numbersCheckElement.checked === true
  console.log(characters.toString()) 
}
numbersCheckElement.addEventListener('click', addNumbers)

//SYMBOLS
const addSymbols = event => {
  symbolsCheckElement.checked === true
  console.log(characters.toString()) 
}
symbolsCheckElement.addEventListener('click', addSymbols)

//ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/
const characters = [];

//PASSWORD
const getPassword = () => {

  if (upperCheckElement.checked === true) {
    characters.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  }

  if (lowerCheckElement.checked === true) {
    characters.push('abcdefghijklmnopqrstuvwxyz')
  }

  if (numbersCheckElement.checked === true) {
    characters.push('0123456789')
  }

  if (symbolsCheckElement.checked === true) {
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
btnElement.addEventListener('click', getPassword);