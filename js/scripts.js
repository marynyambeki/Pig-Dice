/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var TotalScores, playerscore,activeplayer;//stors the global variables

newGameBtn();//calls the init()function straight away which sets all values to 0

const player1Score = document.querySelector('.player1Score');
const player2Score = document.querySelector('.player2Score');
const player1 = document.querySelector('.player1Header button');
const player2 = document.querySelector('.player2Header button');
const player1TotalScore = document.querySelector('.player1TotalScoreNo');
const player2TotalScore = document.querySelector('.ScoreNo');
const newGameBtn = document.querySelector('.newGameBtn');
const keepBtn = document.querySelector('.keepBtn button');
const diceImg = document.querySelector('.diceJS');
const rollBtn = document.querySelector('.rollBtn button');

let currentPlayer;


function newGame() {
    diceImg.setAttribute('src', `https://game-icons.net/1x1/delapouite/dice-six-faces-one.html`);
    player1Score.textContent = '0';
    player2Score.textContent = '0';
    player1TotalScore.textContent = '0';
    player2TotalScore.textContent = '0';
    player1.classList.remove('activeJS');
    player2.classList.remove('activeJS');
    player1.classList.add('activeJS');
    currentPlayer = 'player1';
    player1Score.style.color = 'rgb(78, 8, 51';
    player2Score.style.color = 'rgb(78, 8, 51';
}

newGame();

newGameBtn.addEventListener('click', () => newGame());

const checkForWin = () => {
    if (Number(player1Score.textContent) >= 100 || Number(player2Score.textContent) >= 100) {
            currentPlayer = null;
            player1.classList.remove('activeJS');
            player2.classList.remove('activeJS');
            if (Number(player1Score.textContent) >= 100) {
                    player1Score.style.color = '#bada55';
            } else {
                    player2Score.style.color = '#bada55';
            }
    }
};
  