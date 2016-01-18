////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var playerMove;
    if (move != null) {
      playerMove = move;
    } else {
      playerMove = getInput();
    }
    return playerMove;
  }
function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var compMove;
    if (move != null) {
      compMove = move;
    } else {
      compMove = randomPlay();
    }
    return compMove;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove == computerMove) {
      winner = "tie"
    } else if ((playerMove == "rock") && (computerMove == "sissors")) || ((playerMove == "scissors") && (computerMove == "paper")) || ((playerMove == "paper") && (computerMove == "rock")) {
      winner = "player"
    } else {
      winner = "computer"
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove;
    var computerMove;
    var winner;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    while (playerWins < 5 && computerWins < 5) {
      playerMove = getPlayerMove();
      computerMove = getComputerMove();
      winner = getWinner();
      console.log("player chose " + playerMove + "computer chose " + computerMove);
      console.log("The winner for this round is: " + winner;
      console.log("The score is: player has won " + playerWins + "rounds" + " and computer has won: " + computerWins + " rounds.")
    }
    return [playerWins, computerWins];
}
