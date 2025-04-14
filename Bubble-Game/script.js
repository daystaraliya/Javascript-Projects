var timer = 30;
var score = 0;
var hitno = 0;

function IncreaseScore() {
  score += 10;
  document.querySelector("#Scoreval").textContent = score;
}

function getNewHit() {
  hitno = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitno;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i < 177; i++) {
    var no = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${no}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var timeInterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timeInterval);
      document.querySelector("#pbtm").innerHTML = `<div>
      <h1 class="result-text">Game Over</h1>
      <h2 class="score-text">Your Score : ${score} </h2>
      </div>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clickedNo = Number(details.target.textContent);

  if (clickedNo == hitno) {
    IncreaseScore();
    makeBubble();
    getNewHit();
  }
});

runTimer();
makeBubble();
getNewHit();
