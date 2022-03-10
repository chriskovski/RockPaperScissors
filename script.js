let choice = ['Rock', 'Paper', 'Scissors'];

function computerPlay(x) {
    x = choice[Math.floor(Math.random()*choice.length)];
    return x;
}



function playerPlay(playerSelect){
    
    if (playerSelect == rockSelect){
        return playerSelect = choice[0];
    }else if (playerSelect == paperSelect){
        return playerSelect = choice[1];
    }else if (playerSelect == scissorsSelect){
        return playerSelect = choice[2];
    }
}



function playRound() { 
    
    let computerSelect = computerPlay();
    

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
const rock = document.getElementById("rock");
const rockSelect = rock.addEventListener("click", playerPlay(rockSelect));

const paper = document.getElementById("paper");
const paperSelect = paper.addEventListener("click", playerPlay(paperSelect));

const scissors = document.getElementById("scissors");
const scissorsSelect = scissors.addEventListener("click", playerPlay(scissorsSelect));

if (rockSelect){
    playRound();
}else if (paperSelect){
    playRound();
}else if (scissorsSelect){
    playRound();
}