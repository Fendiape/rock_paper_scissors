// we are purely going to use js, no need for html or css

function getComputerChoice() {
    let computerChoice = getRandomInt(3);
    // 0, 1, 2
    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    }
    return "scissors";
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    // returns the floor of max (integer) * a random decimal from 0 -> 1
}


console.log(getRandomInt(3));



const aNumber = (window.prompt("Hey, Rock, Paper or Scissors?", ""));