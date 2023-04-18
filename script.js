'use strict';


const won = function () {
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').textContent = secretNumber;

  let highScore = Number(document.querySelector('.highscore').textContent);
  let currentScore = Number(document.querySelector('.score').textContent);

  if (highScore < currentScore) highScore = currentScore;
  document.querySelector('.highscore').textContent = highScore;
  return '🎉 Correct number!';
};

let secretNumber =
  Math.trunc(Math.random() * 20) +
  1; /* added 1 because value will be from 0 to 19*/
console.log(secretNumber);
let score = 20;

// check Number inputted when check button is clicked
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  let message = '';
  // No input
  if (!guess) {
    message = '😕 Guess a number to check!';

    // Player wins
  } else if (guess === secretNumber) {
    debugger;
    message = won();
    // Guess too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      if (secretNumber - guess > 5) message = '📈 Too high!';
      else message = '📈 little bit high!';

      score--;
    } else {
      message = '🙅‍♂️ You lost the game!';
      score = 0;
    }

    // Guess too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      if (secretNumber - guess > 5) message = '📉 Too low!';
      else message = '📉 little bit low!';
      score--;
    } else {
      message = '🙅‍♂️ You lost the game!';
      score = 0;
    }
  }
  document.querySelector('.message').textContent = message;
  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  // Reset everything changed on winning
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
