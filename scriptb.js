let choice = ['Rock', 'Paper', 'Scissors'];
let playerSelect = "";

const results = document.getElementById("results");

let playerPts = 0;
document.getElementById("player").innerHTML = playerPts;

let comPts = 0;
document.getElementById("computer").innerHTML = comPts;

function computerPlay(x) {
    x = choice[Math.floor(Math.random()*choice.length)];
    return x;
}


const rockBtn = document.getElementById("rock");
rockBtn.addEventListener("click", function(){
  playerSelect = choice[0];
})
rockBtn.addEventListener("click", playRound);

const paperBtn = document.getElementById("paper");
paperBtn.addEventListener("click", function(){
  playerSelect = choice[1];
})
paperBtn.addEventListener("click", playRound);

const scissorsBtn = document.getElementById("scissors");
scissorsBtn.addEventListener("click", function(){
  playerSelect = choice[2];
})
scissorsBtn.addEventListener("click", playRound);


const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", function(){
  results.innerHTML = "";
  computer.innerHTML = 0;
  player.innerHTML = 0;
  comPts = 0;
  playerPts = 0;
})

function playRound() { 
  
  let computerSelect = computerPlay();
  let p = document.createElement("p");
  
  if(playerPts < 3 && comPts < 3){
    if (playerSelect == choice[0] && computerSelect == choice[1]) {
      p.textContent = `Your Pick: ${playerSelect}.\r\nComputers Pick: ${computerSelect}.\r\nComputer Won!\r\n`;
      comPts++;
      computer.innerHTML = comPts;
      results.appendChild(p);
    }else if (playerSelect == choice[0] && computerSelect == choice[2]) {
      p.textContent = `Your Pick: ${playerSelect}.\r\nComputers Pick: ${computerSelect}.\r\nYou Won!\r\n`;
      playerPts++;
      player.innerHTML = playerPts;
      results.appendChild(p);
    }else if (playerSelect == choice[1] && computerSelect == choice[0]) {
      p.textContent = `Your Pick: ${playerSelect}.\r\nComputers Pick: ${computerSelect}.\r\nPlayer Won!\r\n`;
      playerPts++;
      player.innerHTML = playerPts;
      results.appendChild(p);
    }else if(playerSelect == choice[1] && computerSelect == choice[2]) {
      p.textContent = `Your Pick: ${playerSelect}.\r\nComputers Pick: ${computerSelect}.\r\nComputer Won!\r\n`;
      comPts++;
      computer.innerHTML = comPts;
      results.appendChild(p);
    }else if (playerSelect == choice[2] && computerSelect == choice[0]) {
      p.textContent = `Your Pick: ${playerSelect}.\r\nComputers Pick: ${computerSelect}.\r\nComputer Won!\r\n`;
      comPts++;
      computer.innerHTML = comPts;
      results.appendChild(p);
    }else if (playerSelect == choice[2] && computerSelect == choice[1]) {
      p.textContent = `Your Pick: ${playerSelect}.\r\nComputers Pick: ${computerSelect}.\r\nPlayer Won!`;
      playerPts++;
      player.innerHTML = playerPts;
      results.appendChild(p);
    }else{
      p.textContent = `It's a tie!`;
      results.appendChild(p);
    }
  }else{
    if (playerPts > comPts){
      p.textContent = `Victory! Final Score: Player ${playerPts} : ${comPts} Computer\r\n`;
      results.appendChild(p);
    }else if (comPts > playerPts){
      p.textContent = `Too bad! Final Score: Player ${playerPts} : ${comPts} Computer\r\n`;
      results.appendChild(p);
    }
  }  
}

