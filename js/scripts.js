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
var clearValues = function(){
    $(".player1").val("");
    $(".player2").val("");
}
 $(document).ready(function() {
    $(".start").click(function(event){
        player1 = new Player(true);
        player2 =  new Player(false);
        $(".gaming").show();
         $(".landing").slideToggle();
    
         var player1Name = $(".player1Name").val();
        $("#player1Name").text(player1Name);
    
         var player2Name = $(".player2Name").val();
         $("#player2Name").text(player2Name);
    
         player1.player1=player1;
         player2.player2=player2;
    
     });
    $(".newGameBtn").click(function(event){
        // $(".landing").slideToggle();
        // $(".player-console").slideToggle();
        clearValues();
        player1.newGame();
        player2.newGame();
        $(".player1TotalScore").empty();
        $(".player1ScoreNo").empty();
        $(".player1Score").empty();
        $(".player2TotalScore").empty();
        $(".player2ScoreNo").empty();
        $(".player2Score").empty();
    });
    $(".rollBtn").click(function(event){
        player1.roll = throwdice();
        $(".player1Score").text(player1.roll);
        player1.rollone();
        $(".player1TotalScore").text(player1.rollscore);
    });
    $(".rollBtn").click(function(event){
        player2.roll = throwdice();
        $(".player2Score").text(player2.roll);
        player2.rollone();
        $(".player2TotalScore").text(player2.rollscore);
    });
    $(".keepBtn").click(function(event){
        player1.hold();
        $(".player1ScoreNo").text(player1.totalscore);
        $(".player1TotalScore").empty();
        $(".player1Score").empty();
        player1.winner();
    });
    $(".keepBtn").click(function(event){
        player2.hold();
        $(".player2ScoreNo").text(player2.totalscore);
        $(".player2TotalScore").empty();
        $(".player2Score").empty();
        player2.winner();
    });
});
