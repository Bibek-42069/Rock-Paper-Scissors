let arr = ['Rock','Paper','Scissor'];

function computerPlay(){
    return arr[Math.floor(Math.random() * Math.floor(3))]
}

function playRound(playerSel, computerSel){
    let whoWon = ''

    if(playerSel === 'Rock'){
        if(computerSel === 'Paper')
            whoWon = 'You lose! Paper beats rock!';
        else if(computerSel === 'Rock')
            whoWon = 'Tied! Rock and Rock cancel each other out!';
        else
            whoWon = 'You won! Rock beats scissor';
    } 
    else if(playerSel === 'Scissors' ) {
        if(computerSel === 'Rock')
            whoWon = 'You lose! Rock beats scissors';
        else if(computerSel === 'Scissors')
            whoWon = 'Tied! Scissor and Scissor cancel each other out';
        else
            whoWon = 'You won! Scissor beats Paper'
    }
    else{
        if(computerSel === 'Scissor')
            whoWon = 'You lose! Scissor beats paper!';
        else if(computerSel === 'Paper')
            whoWon = 'Tied! Paper and Paper cancel each other out';
        else
            whoWon = 'You won! Paper beats Rock!';
    }
    return whoWon
}

const computerSel = computerPlay();
const playerSel = 'Paper';

console.log(computerSel);
console.log(playRound(playerSel, computerSel));