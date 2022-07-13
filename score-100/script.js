'use strict';
// const playerName0 = prompt(`Please Enter First Player's Name`);
// const playerName1 = prompt(`Please Enter Second Player's Name`);
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const btnRoll = document.querySelector('.btn--roll');
const diceEl = document.querySelector('.dice');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
// document.getElementById('name--0').textContent = playerName0;
// document.getElementById('name--1').textContent = playerName1;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function (){
    diceEl.classList.remove('hidden');
    let dice = Math.trunc(Math.random()*6)+1;
    console.log(dice);
    diceEl.src = `dice-${dice}.png`;

    if (dice !==1) {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1: 0;
        player0El.classList.toggle(`player--active`);
        player1El.classList.toggle(`player--active`);
    }
})