let choice = ['Rock', 'Paper', 'Scissors'];
let playerSelect = "";

function computerPlay(x) {
    x = choice[Math.floor(Math.random()*choice.length)];
    return x;
}

let rockBtn = document.getElementById("rock");
rockBtn.addEventListener("click", function(){
  playerSelect = choice[0];
})
rockBtn.addEventListener("click", playRound);

let paperBtn = document.getElementById("paper");
paperBtn.addEventListener("click", function(){
  playerSelect = choice[1];
})
paperBtn.addEventListener("click", playRound);

let scissorsBtn = document.getElementById("scissors");
scissorsBtn.addEventListener("click", function(){
  playerSelect = choice[2];
})
scissorsBtn.addEventListener("click", playRound);

let results = document.getElementById("results");

function playRound() { 
  let playerPts = 0;
  let comPts = 0; 
  let computerSelect = computerPlay();
  let p = document.createElement("p");

  if (playerSelect == choice[0] && computerSelect == choice[1]) {
    ++comPts;
    p.textContent = `You Lose!\n${computerSelect} beats ${playerSelect}! Score: Player ${playerPts} : ${comPts} Computer\n\n`;
    results.appendChild(p);
  }else if (playerSelect == choice[0] && computerSelect == choice[2]) {
    ++playerPts;
    p.textContent = `You Win!\n${playerSelect} beats ${computerSelect}! Score: Player ${playerPts} : ${comPts} Computer\n\n`;
    results.appendChild(p);
  }else if (playerSelect == choice[1] && computerSelect == choice[0]) {
    ++playerPts;
    p.textContent = `You Win!\n${playerSelect} beats ${computerSelect}! Score: Player ${playerPts} : ${comPts} Computer\n\n`;
    results.appendChild(p);
  }else if(playerSelect == choice[1] && computerSelect == choice[2]) {
    ++comPts;
    p.textContent = `You Lose!\n${computerSelect} beats ${playerSelect}! Score: Player ${playerPts} : ${comPts} Computer\n\n`;
    results.appendChild(p);
  }else if (playerSelect == choice[2] && computerSelect == choice[0]) {
    ++comPts;
    p.textContent = `You Lose!\n${computerSelect} beats ${playerSelect}! Score: Player ${playerPts} : ${comPts} Computer\n\n`;
    results.appendChild(p);
  }else if (playerSelect == choice[2] && computerSelect == choice[1]) {
    ++playerPts;
    p.textContent = `You Win!\n${playerSelect} beats ${computerSelect}! Score: Player ${playerPts} : ${comPts} Computer\n\n`;
    results.appendChild(p);
  }else{
    p.textContent = `It's a tie! Score: Player ${playerPts} : ${comPts} Computer\n\n`;
    results.appendChild(p);
  }

  
}
