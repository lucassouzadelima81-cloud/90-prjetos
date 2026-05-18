let score = 0;
let time = 30;
let gameInterval;
let timerInterval;

const box = document.getElementById("box");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");

function randomPosition(){
  const x = Math.random() * 350;
  const y = Math.random() * 350;

  box.style.left = x + "px";
  box.style.top = y + "px";
}

box.addEventListener("click", () => {
  score++;
  scoreEl.textContent = score;
  randomPosition();
});

function startGame(){
  score = 0;
  time = 30;

  scoreEl.textContent = score;
  timeEl.textContent = time;

  box.style.display = "block";
  randomPosition();

  clearInterval(gameInterval);
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    time--;
    timeEl.textContent = time;

    if(time === 0){
      endGame();
    }
  }, 1000);
}

function endGame(){
  clearInterval(timerInterval);
  box.style.display = "none";

  alert("Fim de jogo! Sua pontuação foi: " + score);
}