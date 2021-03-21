let arr = ['Rock','Paper','Scissor'];

function computerPlay(){
    return arr[Math.floor(Math.random() * Math.floor(3))]
}

function getWinner(whoWonMessage){
    if(whoWonMessage.includes('You lose'))
        return 0
    else if(whoWonMessage.includes('You won'))
        return 1
    else
        return 2
}

function playRound(playerSel, computerSel){
    //Removed WhoWon var since it was unnesscary and just used return
    if(playerSel === 'Rock'){
        if(computerSel === 'Paper')
            return 'You lose! Paper beats rock!';
        else if(computerSel === 'Rock')
            return 'Tied! Rock and Rock cancel each other out!';
        else
            return 'You won! Rock beats scissor';
    } 
    else if(playerSel === 'Scissors' ) {
        if(computerSel === 'Rock')
            return 'You lose! Rock beats scissors';
        else if(computerSel === 'Scissors')
            return 'Tied! Scissor and Scissor cancel each other out';
        else
            return 'You won! Scissor beats Paper'
    }
    else{
        if(computerSel === 'Scissor')
            return 'You lose! Scissor beats paper!';
        else if(computerSel === 'Paper')
            return 'Tied! Paper and Paper cancel each other out';
        else
            return 'You won! Paper beats Rock!';
    }
}



function askPlayerForInput()
{
    let pInput = prompt('Pick and option', 'Rock, Paper, Scissor');

    while(pInput != 'Rock' && pInput != 'Paper' && pInput != 'Scissor')
    {
        pInput = prompt('Pick and option', 'Rock, Paper, Scissor');
    }

    return pInput.substring(0,1).toUpperCase() + pInput.substring(1);
}

function game(){
    let playerWins = 0;
    let playerTies =  0;
    let playerLoses = 0;

    for (let index = 0; index <= 5; index++) {
        const computerSel = computerPlay();
        const playerSel = askPlayerForInput();
        let roundResult = getWinner(playRound(playerSel, computerSel));  
        console.log(playRound(playerSel, computerSel));
        
        if(roundResult === 0)
            playerLoses += 1;
        else if (roundResult === 1)
            playerWins += 1;
        else 
            playerTies += 1;
    }

    console.log(`Player won ${playerWins} rounds, lost ${playerLoses} rounds, and tied in ${playerTies} rounds`)
    if(playerLoses > playerWins)
        console.log('Player has lost the game!');
    else if (playerLoses < playerWins)
        console.log('Player has won the game!')
    else if (playerWins === playerLoses)
        console.log('Player and bot are tied! this game')
}
game();