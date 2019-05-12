/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
const p1Score = document.querySelector('.player1Score');
const p2Score = document.querySelector('.player2Score');
const player1 = document.querySelector('.player1Header button');
const player2 = document.querySelector('.player2Header button');
const p1TempScore = document.querySelector('.player1TotalScoreNo');
const p2TempScore = document.querySelector('.ScoreNo');
const newGameBtn = document.querySelector('.newGameBtn');
const keepBtn = document.querySelector('.keepBtn button');
const diceImg = document.querySelector('.diceJS');
const rollBtn = document.querySelector('.rollBtn button');

let currentPlayer;

  