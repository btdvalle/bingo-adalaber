"use strict";
const card = document.querySelector(".js-card");
const btn = document.querySelector(".js-btn");
const newContainer = document.querySelector(".js-newball");
const modal = document.querySelector(".js-modal");
const cardNumbers = [];
const newNumbers = [];

const getAleatory = function(arr, long) {
  arr[0] = Math.round(Math.random() * 99 + 1);
  for (let i = 1; i < long; i++) {
    arr[i] = Math.round(Math.random() * 99 + 1);
    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j]) {
        arr[i] = Math.round(Math.random() * 99 + 1);
        i--;
      }
    }
  }
};

// const getAleatory2 = function(arr, long) {
//   while (arr.length < long) {
//     const randomNumber = Math.round(Math.random() * 99 + 1);
//     if (arr.indexOf(arr, randomNumber) === -1) {
//       arr.push(randomNumber);
//     }
//   }
// };

const getCardNumbers = function() {
  getAleatory(cardNumbers, 20);
  for (let i = 0; i < cardNumbers.length; i++) {
    card.innerHTML += `<div class="number number${i}">  ${cardNumbers[i]}</div>`;
  }
};

let newNumber;
let i = 0;
const getNewNumber = function() {
  if (i < 100) {
    newContainer.innerHTML += `<div class="number">  ${newNumbers[i]}</div>`;
    newNumber = newNumbers[i];
  }
  i++;
};

const findMatched = function() {
  for (let i = 0; i < cardNumbers.length; i++) {
    if (newNumber === cardNumbers[i]) {
      const number = document.querySelector(`.number${i}`);
      number.classList.add("matched");
    }
  }
};

const showUpModal = function() {
  modal.classList.add("showup");
};

const isBingo = function() {
  let allMatches = true;
  for (let idx = 0; idx < cardNumbers.length; idx++) {
    if (newNumbers.slice(0, i).indexOf(cardNumbers[idx]) === -1) {
      allMatches = false;
      const play = function() {
        setInterval(bingo, 1000);
      };
      btn.addEventListener("click", play);
    }
  }
  if (allMatches === true) {
    btn.classList.add("hidden");
    showUpModal();
    clearInterval(stop);
  }
};

getCardNumbers();
getAleatory(newNumbers, 100);
const bingo = function() {
  getNewNumber();
  findMatched();
  isBingo();
};

// btn.addEventListener("click", bingo);
let stop;
const play = function() {
  stop = setInterval(bingo, 1000);
};
btn.addEventListener("click", play);
