// function getComputerChoice returns rock paper or scissors
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    return choice;
}

// function to play a round player vs computer returns string you win or lose
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 1 && computerSelection === 1) {
        return 'You tied!'
    } else if (playerSelection === 1 && computerSelection === 2) {
        return 'You lost! :('
    } else if (playerSelection === 1 && computerSelection === 3) {
        return 'You win! :D'
    }
}
const playerSelection = 1;
const computerSelection = getComputerChoice();

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();

let playerChoice = prompt('Rock, Paper, or Scissors?')