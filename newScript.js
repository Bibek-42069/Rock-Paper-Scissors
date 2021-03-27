function roundOutcome(option, optionWeakTo, optionStrongTo){
    if(computerVar === optionWeakTo) 
        return `You lose! ${optionWeakTo} beats ${option}`;
    else if(computerVar === optionStrongTo) 
        return `You win! ${option} beats ${optionStrongTo}`;
    else 
        return `Tie! ${option} and ${option} cancel each other out!`;
}

function getWinner(whoWonMessage){
    if(whoWonMessage.includes('You lose!'))
        playerData[1] += 1;
    else if(whoWonMessage.includes('You win!'))
        playerData[0] += 1;
    else if (whoWonMessage.includes('Tie!'))
        playerData[2] += 1;
}


function playRound(playerSel, computerSel){
    if(playerVar === 'Rock'){
        return (roundOutcome('Rock', 'Paper', 'Scissor'))
    } 
    else if(playerVar === 'Scissors') {
        return (roundOutcome('Scissor','Rock', 'Paper'))
    }
    else{
        return (roundOutcome('Paper', 'Scissor', 'Rock'))
    }
}

function gameOverResult(){
    if(playerData[1] > playerData[0])
        return ('Player has lost the game!');
    else if (playerData[1] < playerData[0])
        return('Player has won the game!');
    else if (playerData[1] === playerData[0])
        return('Player and bot are tied! this game');
}

function gameOver(){
    div.style.display = 'none';
    divGameInfo.style.display = 'none';
    divGameOver.style.display = 'inline';
    gameOverInfo.innerHTML = gameOverResult();
}

function gameRestart()
{
    for (let index = 0; index < playerData.length; index++) {
        playerData[index] = 0;
    }
    playerVar = '';
    computerVar = '';
    round = 0;

    gameRound.innerHTML = `Round ${round}`;
    info.innerHTML = `Player won ${playerData[0]} rounds, lost ${playerData[1]} rounds, and tied in ${playerData[2]} rounds`
    gInfo.innerHTML = 'Game Not Started'

    div.style.display = 'inline';
    divGameInfo.style.display = 'inline';
    divGameOver.style.display = 'none';
}

function assignValue(e){
    playerVar = e.id;
}

function assignComputerChoice(){
    computerVar = computerArr[Math.floor(Math.random() * Math.floor(3))]
}

function game(){
    const gameResult = playRound(playerVar,computerVar);
    getWinner(gameResult);
    round++;
    gInfo.innerHTML = gameResult;
    gameRound.innerHTML = `Round ${round}`;
    info.innerHTML = `Player won ${playerData[0]} rounds, lost ${playerData[1]} rounds, and tied in ${playerData[2]} rounds`
}

// 0 = player wins, 1 = player loses, 2 = player ties
let computerArr = ['Rock', 'Paper', 'Scissor'];
let playerData = [0,0,0];
let playerVar = '';
let computerVar = '';
let round = 0;

const playButtons = document.querySelectorAll('#container');
const playAgainButton = document.querySelector('#playAgain')
const divGameInfo = document.querySelector('#gameInfo')
const divGameOver = document.querySelector('#gameOver')
const div = document.querySelector('#container');
const info = document.querySelector('#info');
const gInfo = document.querySelector('#gamePlayInfo');
const gameRound = document.querySelector('#gameRound');
const gameOverInfo = document.querySelector('#gameOverInfo')

playButtons.forEach((button) => {
    button.addEventListener('click', function() {
      assignValue(button);
      assignComputerChoice();
      game();
      if(round >= 5){
          gameOver();
      }
    });
});

playAgainButton.addEventListener('click', function(){
    gameRestart()
});