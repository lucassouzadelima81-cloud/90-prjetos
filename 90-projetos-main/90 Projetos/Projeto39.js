let playerScore = 0;
let computerScore = 0;

const playerScoreEl = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");
const resultEl = document.getElementById("result");

function play(playerChoice){

  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if(playerChoice === computerChoice){
    result = "Empate!";
  }
  else if(
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ){
    result = "Você ganhou!";
    playerScore++;
  }
  else{
    result = "Você perdeu!";
    computerScore++;
  }

  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  resultEl.textContent = `Você: ${playerChoice} | PC: ${computerChoice} → ${result}`;
}