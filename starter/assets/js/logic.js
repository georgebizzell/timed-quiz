// Selects element by class
var timeEl = document.querySelector("#time");

var startButton = document.querySelector("#start");

var secondsLeft = 76;

startButton.addEventListener("click", setTime);

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    console.log(secondsLeft);

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}