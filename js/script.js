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

$(".holdBtn2").hide();
$(".rollBtn2").hide();
$(document).ready(function () {
    $(".rollBtn1").click(function () {
        roll();
        if (random == 1) {
            $(".holdBtn1").hide();
            $(".rollBtn1").hide();
            $(".holdBtn2").toggle();
            $(".rollBtn2").toggle();
        } else {
            diceTotal1.push(random);
            total1 = diceTotal1.reduce(getSum, 0);
            $(".player1Score").text(random);
        }
        console.log(random);
    });
    $(".holdBtn1").click(function () {
       
        $(".holdBtn1").hide();
        $(".rollBtn1").hide();
        $(".holdBtn2").toggle();
        $(".rollBtn2").toggle();
        diceTotal1 = [];
        final1 += total1;
        $(".player1TotalScore").text(final1);
        if(final1 >= 100){
            alert("Hurray!!! Player 1 won")
        }
    });

    git 