function computerPlay() {
    let plays = ["rock", "paper", "scissors"];
    let currentPlay = plays[Math.floor(Math.random() * plays.length)];
    return currentPlay;
}

let computerSelection = computerPlay();
let playerSelection = "rock";

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock"){
        if (computerSelection === "rock"){
            return ["draw", "It's a draw! Try again."];
        }
        else if (computerSelection === "paper"){
            return ["loss", "Rock loses to paper. You lose!"];
        }
        else {
            return ["win", "Rock beats scissors. You win!"];
        }
    }
    else if (playerSelection === "paper"){
        if (computerSelection === "paper"){
            return ["draw", "It's a draw! Try again."];
        }
        else if (computerSelection === "scissors"){
            return ["loss", "Paper loses to scissors. You lose!"];
        }
        else {
            return ["win", "Paper beats rock. You win!"];
        }
    }
    else if (playerSelection === "scissors"){
        if (computerSelection === "scissors"){
            return ["draw", "It's a draw! Try again."];
        }
        else if (computerSelection === "rock"){
            return ["loss", "Scissors loses to rock. You lose!"];
        }
        else {
            return ["win", "Scissors beats paper. You win!"];
        }
    }
}

function game() {
    let draw = 0;
    let loss = 0;
    let win = 0;

    for (let i=0; i<5; i++){

        computerSelection = computerPlay();
        playerSelection = prompt("Input 'rock, 'paper' or 'scissors'");
        let result = playRound(playerSelection, computerSelection);
        if (result[0] === "draw"){
            draw++;
        }
        else if (result[0] === "loss"){
            loss++;
        }
        else {
            win++;
        }
        //console.log("Player - " + playerSelection + ". Computer - " + computerSelection);
        console.log(result[1]);
    }

    if (win > loss){
        console.log("You win the game! " + loss + " to " + win);
    }
    else if (win < loss){
        console.log("You lose the game! " + win + " to " + loss);
    }
    else  {
        console.log("Its a draw");
    }
}