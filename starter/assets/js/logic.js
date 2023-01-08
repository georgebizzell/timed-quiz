// Selects element by id
var timeEl = document.querySelector("#time");

var startButton = document.querySelector("#start");

var initialsEl = document.querySelector("#initials");

var submitHighScoresEl = document.querySelector("#submit");

// Set timerInterval var

var secondsLeft = 61;
var timerInterval;

function startTimer() {
  timerInterval = setInterval(timerCount, 1000);
}

function clearTimer()
{
  console.log("clearTimer called")
  clearInterval(timerInterval);
  console.log(timerInterval);
  secondsLeft = 10;
}

function timerCount(){
  secondsLeft--;
  timeEl.textContent = secondsLeft;
  if(secondsLeft === 0) {
    // Stops execution of action at set interval
    clearInterval(timerInterval);
  }
}

function saveHighScore() {
  var entry = document.createElement('li');
  entry.appendChild(document.createTextNode(firstname));
  list.appendChild(entry);
}