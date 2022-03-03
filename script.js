let choice = ['Rock', 'Paper', 'Scissors'];

function computerPlay(x) {
    x = choice[Math.floor(Math.random()*choice.length)];
    return x;
}


function playRound() { 
    let playerPrompt = prompt("What's your choice? (Rock, Paper, Scissors)").toLowerCase();
    let playerSelect = playerPrompt.charAt(0).toUpperCase() + playerPrompt.slice(1);
    const computerSelect = computerPlay();
    
    if (playerSelect == choice[0] && computerSelect == choice[1]) {
        console.log("You Lose! Paper beats Rock!");
    }else if (playerSelect == choice[0] && computerSelect == choice[2]) {
        console.log("You Win! Rock beats Scissors!");
    }else if (playerSelect == choice[1] && computerSelect == choice[0]) {
        console.log("You Win! Paper beats Rock!");
    }else if(playerSelect == choice[1] && computerSelect == choice[2]) {
        console.log("You Lose! Scissors beats Paper!");
    }else if (playerSelect == choice[2] && computerSelect == choice[0]) {
        console.log("You Lose! Rock beats Scissors!");
    }else if (playerSelect == choice[2] && computerSelect == choice[1]) {
        console.log("You Win! Scissors beats Paper!");
    }else{
        console.log("It's a tie!")
    }  
}

function game() {
    let rounds = parseInt(prompt("How many rounds you want to play?: "));
    for (i = 0; i < rounds; i++) {
        playRound();
    }
}

game();