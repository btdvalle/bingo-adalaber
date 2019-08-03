"use strict";
const cardNumbers = [];
const card = document.querySelector(".js-card");
const btn = document.querySelector(".js-btn");
const newContainer = document.querySelector(".js-newball");
const modal = document.querySelector(".js-modal");

const getCardNumbers = function() {
  for (let i = 0; i < 20; i++) {
    cardNumbers[i] = i;
    card.innerHTML += `<div class="number number${i}"> ${cardNumbers[i]}</div>`;
  }
};

let newNumber = 0;
const getNewNumber = function() {
  newContainer.innerHTML += `<div class="number">  ${newNumber}</div>`;
};
const masUno = function() {
  newNumber++;
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
  //   debugger;
  let bingo;
  for (let i = 0; i < cardNumbers.length; i++) {
    const number = document.querySelector(`.number${i}`);
    if (number.classList.contains("matched")) {
      bingo = true;
    } else {
      return (bingo = false);
    }
  }
  if (bingo === true) {
    btn.classList.add("hidden");
    showUpModal();
  }
};

const bingo = function() {
  getNewNumber();
  findMatched();
  masUno();
  isBingo();
};

getCardNumbers();
btn.addEventListener("click", bingo);
