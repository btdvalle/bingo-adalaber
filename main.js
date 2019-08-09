'use strict';
const card = document.querySelector('.js-card');
const btn = document.querySelector('.js-btn');
const newContainer = document.querySelector('.js-newball');
const modal = document.querySelector('.js-modal');
const cardNumbers = [];
const newNumbers = [];

// esto lo podemos sacar a una función independiente para que sea más legible
const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
};

// creo que esto funcionaría así igual que la tuya
const getAleatory = function(arr, long) {
  for (let i = 1; i < long; i++) {
    const randomNumber = getRandomNumber(100);
    if (arr.indexOf(randomNumber) >= 0) {
      i--;
    } else {
      arr.push(randomNumber);
    }
  }
};

// esta ok
const getCardNumbers = function() {
  getAleatory(cardNumbers, 20);
  for (let i = 0; i < cardNumbers.length; i++) {
    card.innerHTML += `<div class="number number${i}">${cardNumbers[i]}</div>`;
  }
};

let newNumber;
let i = 0;
// aquí hay cosas que no me terminan de encajar:
// - has generado 100 números aleatorios en newNumbers y con la variable i estás diciendo cuantos has mostrado
// - lo primero sería cambiar la variable i por newNumbersShown porque "i" no significa lo que es esa variable
// - pero estás gestionando el concepto "Números que han salido del bingo" con dos variables: "newNumbers" y "i"
// - es más fácil no usar "i"
// - es más fácil arrancar la web con 0 números en newNumbers y cada vez que ejecutamos la función "bingo" añadir un nuevo número aleatorio a newNumbers
// - para generar un solo número aleatorio más utilizando las funciones que tenías puedes hacer getAleatory(newNumbers, newNumbers.length + 1)
const getNewNumber = function() {
  if (i < 100) {
    newContainer.innerHTML += `<div class="number">${newNumbers[i]}</div>`;
    newNumber = newNumbers[i];
  }
  i++;
  console.log(newNumbers.length, i);
};

// esta ok
const findMatched = function() {
  for (let i = 0; i < cardNumbers.length; i++) {
    if (newNumber === cardNumbers[i]) {
      const number = document.querySelector(`.number${i}`);
      number.classList.add('matched');
    }
  }
};

// esta ok
const showUpModal = function() {
  modal.classList.add('showup');
};

// esta ok
const isBingo = function() {
  let allMatches = true;
  for (let idx = 0; idx < cardNumbers.length; idx++) {
    if (newNumbers.slice(0, i).indexOf(cardNumbers[idx]) === -1) {
      allMatches = false;
    }
  }
  return allMatches;
};

// esta ok
const bingo = function() {
  getNewNumber();
  findMatched();
  if (isBingo()) {
    btn.classList.add('hidden');
    showUpModal();
    clearInterval(stop);
  }
};

// esta ok
let stop;
const play = function() {
  stop = setInterval(bingo, 100);
};

// esta ok
getCardNumbers();
getAleatory(newNumbers, 100);
btn.addEventListener('click', play);

// las mejoras que te propongo son para que avances un escalón más en tu nivel como programadora
// pero el ejercicio está muy bien
