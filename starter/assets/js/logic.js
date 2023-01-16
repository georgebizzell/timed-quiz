// Selects element by id
var timeEl = document.querySelector("#time");

var startButton = document.querySelector("#start");

var submitHighScoresEl = document.querySelector("#submit");

// Set timerInterval var

var secondsLeft = 61;
var timerInterval;

function startTimer() {
  timerInterval = setInterval(timerCount, 1000);
}

// Clear timer function

function clearTimer()
{
  console.log("clearTimer called")
  clearInterval(timerInterval);
  console.log(timerInterval);
}

// Timer countdown function

function timerCount(){
  secondsLeft--;
  timeEl.textContent = secondsLeft;
  if(secondsLeft === 0) {
    // Stops execution of action at set interval
    clearInterval(timerInterval);
    window.location.href = "highscores.html";
  }
}