'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('⛔ No Number');
  } else if (guess === secretNumber) {
    displayMessage('🎉 You guessed it right. Congrats!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.check').style.visibility = 'hidden';
    document.querySelector('body').style.backgroundColor = '#61D070';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    displayMessage(
      guess > secretNumber
        ? '⛔ You guessed a bigger number'
        : '⛔ You guessed a lower number'
    );

    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      displayMessage('😞 You lost the game! Try again.');
      document.querySelector('.check').style.visibility = 'hidden';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.check').style.visibility = 'visible';
  document.querySelector('.guess').value = '';
});
