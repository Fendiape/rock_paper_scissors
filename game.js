// we are purely going to use js, no need for html or css

function getComputerChoice() {
    let computerChoice = getRandomInt(3);
    // 0, 1, 2
    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    // returns the floor of max (integer) * a random decimal from 0 -> 1
}

function singleRound() {
    let playerChoice = (window.prompt("Hey, Rock, Paper or Scissors?", "").toLowerCase());
    console.log("Player Choice was: " + playerChoice);

    let compChoice = getComputerChoice();

    console.log("Computer Choice was: " + compChoice);
    if (playerChoice == compChoice) {
        return "Draw, you both got the same item!";
    } else if (playerChoice == "rock" && compChoice == "paper") {
        return "You Lose! Paper beats rock!";
    } else if (playerChoice == "rock" && compChoice == "scissors") {
        return "You Win! Rock beats scissors!";
    }
    // only going to test for rock selection for player
}
let message = "";
function game() {
    message = singleRound();
    console.log(message);
}

game();

