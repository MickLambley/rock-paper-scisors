function computerPlay() {
    let plays = ["rock", "paper", "scisors"];
    let currentPlay = plays[Math.floor(Math.random() * plays.length)];
    return currentPlay;
}

let computerSelection = computerPlay();
let playerSelection = "rock";

console.log(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock"){
        if (computerSelection === "rock"){
            return "It's a draw! Try again.";
        }
        else if (computerSelection === "paper"){
            return "Rock loses to paper. You lose!";
        }
        else {
            return "Rock beats scisors. You win!";
        }
    }
    else if (playerSelection === "paper"){
        if (computerSelection === "paper"){
            return "It's a draw! Try again.";
        }
        else if (computerSelection === "scisors"){
            return "Paper loses to scisors. You lose!";
        }
        else {
            return "Paper beats rock. You win!";
        }
    }
    else if (playerSelection === "scisors"){
        if (computerSelection === "scisors"){
            return "It's a draw! Try again.";
        }
        else if (computerSelection === "rock"){
            return "Scisors loses to rock. You lose!";
        }
        else {
            return "Scisors beats paper. You win!";
        }
    }
}