//1. This hasn't been refactored yet.
//


//Query Selector for dom elements
const playerMoves = document.querySelectorAll('button');
//moves for computer
let moves = ["Rock", "Paper", "Scissors"];
//Score1 == player, score2 == Computer
let score1 = 0;
let score2 = 0;

//Random number generator
function randomIntegers(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//For each button clicked
[].forEach.call(playerMoves, function(ele) {
    ele.addEventListener("click", function() {
      //Computer will randomly generate a move//
      let computerMoves = moves[randomIntegers(moves.length)];
      //Dom selectors for scores, msg, and etc.
      let playerChoice = document.querySelector(".playerChoice");
      let computerChoice = document.querySelector(".computerChoice");
      let winMsg = document.querySelector(".winner");
      let playerScore = document.querySelector('.playerScore');
      let computerScore = document.querySelector('.computerScore');

      //Computers choice and Players choice will be shown;
      computerChoice.innerHTML = computerMoves;
      playerChoice.innerHTML = ele.innerHTML;

      //Game Logic will be shown//
      gameLogic(ele.innerHTML, computerMoves, winMsg)

      //Calculating points
      if (winMsg.innerHTML === "Player!") {
        score1++;
      } else if (winMsg.innerHTML === "Computer!"){
        score2++;
      }

      playerScore.innerHTML = score1;
      computerScore.innerHTML = score2;


      //Win Condition
      if (parseInt(playerScore.innerHTML) === 10) {
        alert("Player Won!");

        winMsg.innerHTML = "";
        reset(playerScore, computerScore, winMsg);

      } else if (parseInt(computerScore.innerHTML) === 10) {
        winMsg.innerHTML = "";
        alert("Computer Won!");
        reset(playerScore, computerScore, winMsg);
      }

      console.log(score1);
      console.log(score2);
    })
});

//Reset Function
function reset(p, c, winmsg) {
  score1 = 0;
  score2 = 0;
  p.innerHTML = 0;
  c.innerHTML = 0;
  winmsg.innerHTML = "";
}

//Game Logic
function gameLogic(player, computer, winner) {

  //If player and computer ties//
  if (player === computer) {
    winner.innerHTML = "tie";
    //else if player choose Paper // 2 Outcomes//
  } else if (player === "Paper") {

    if (computer === "Rock") {
      winner.innerHTML = "Player!"
    } else {
      winner.innerHTML = "Computer!"
    }

    //else if player choose Rock // 2 Outcomes//
  } else if (player === "Rock") {

    if (computer === "Scissors") {
      winner.innerHTML = "Player!"
    } else {
      winner.innerHTML = "Computer!"
    }
    //else if player choose Scissors// 2 outcomes//
  } else if (player === "Scissors") {
    if (computer === "Paper") {
      winner.innerHTML = "Player!"
    } else  {
      winner.innerHTML = "Computer!"
    }
  }

}
