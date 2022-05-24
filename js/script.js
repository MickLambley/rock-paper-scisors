function computerPlay() {
    let plays = ["rock", "paper", "scisors"];
    let currentPlay = plays[Math.floor(Math.random() * plays.length)];
    return currentPlay;
}