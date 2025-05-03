let result = '';
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

const sd = document.querySelector('.scoredisplay');
const rd = document.querySelector('.resultdisplay');
const cd = document.querySelector('.choicedisplay');

updatescore();

function updatescore() {
  sd.innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}

function resetscore() {
  score = { wins: 0, losses: 0, ties: 0 };
  localStorage.removeItem('score');
  updatescore();
  rd.innerHTML = '';
  cd.innerHTML = '';
}

function playGame(userChoice) {
  const computerChoice = pickComputerMove();

  if (userChoice === computerChoice) {
    result = "It's a tie!";
    score.ties++;
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You win!";
    score.wins++;
  } else {
    result = "You lose!";
    score.losses++;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updatescore();
  updateresult();
  updatechoice(userChoice, computerChoice);
}

function updateresult() {
  rd.innerHTML = `${result}`;
}

function updatechoice(userChoice, computerChoice) {
  cd.innerHTML = `
    You <img src="images/${userChoice}-emoji.png" class="mi"> 
    <img src="images/${computerChoice}-emoji.png" class="mi"> Computer`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) return 'rock';
  else if (randomNumber < 2 / 3) return 'paper';
  else return 'scissors';
}
