var player1="";
var player2="";

var throwdice = function () {
    return Math.floor(6 * Math.random())+1;
}
function Player(turn) {
    this.roll = 0;
    this.rollscore = 0;
    this.totalscore = 0;
    this.turn = turn;
    this.players;
}
Player.prototype.rollone = function() {
    if (this.roll === 1) {
    this.rollscore = 0;
    alert("Turn over " + ", you rolled a 1! Try your luck next time!")
    } else {
    this.rollscore += this.roll;
    }
}
Player.prototype.keep = function () {
    this.totalscore += this.rollscore;
    this.rollscore = 0;
    alert(" your turn is over");
}
Player.prototype.winner = function () {
    if (this.totalscore >= 100) {
      alert("Congratulations " + " You won the game!");
    }
}
Player.prototype.newGame = function () {
    this.roll = 0;
    this.rollscore = 0;
    this.totalscore = 0;
    this.players ="";
}
