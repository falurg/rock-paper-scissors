// function getComputerChoice returns rock paper or scissors
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return 'rock'
    } else if (choice === 2){
        return 'paper'
    } else if (choice === 3){
        return 'scissors'
    }
    return choice;
}

// function to play a round player vs computer returns string you win or lose
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'You tied!'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lost! :('
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win! :D'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! :D'
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'You tied!'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lost! :('
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lost! :('
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win! :D'
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'You tied!'
    }
}
// playerSelection & computerSelection needed to be in scope of for loop
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, Paper, or Scissors').toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();