player1 = "";
player2 = "";
var random;
var diceTotal1 = [];
var diceTotal2 = [];
var total1, total2;
var final1 = 0;
var final2 = 0;

function roll() {
    random = Math.floor(Math.random() * 6 + 1);
}

//Getting sum in an array
function getSum(total, dice) {
    return total + dice;
}