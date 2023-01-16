// Selects element by id

var initialsEl = document.querySelector("#initials");

var highScoreListEl = document.querySelector("#highscores");

var submitHighScoresEl = document.querySelector("#submit");

var clearHighScoresEl = document.querySelector("#clear");

var score = 0;

//Set Event Listener

console.log(submitHighScoresEl); // null

// High scores array

var highScores = [];

// Initials and score object

const initialsAndScore = {
  initials: "abc",
  score: 50
}

// Check if element exists before calling addEventListener()
if (submitHighScoresEl) {
  // Not called
  submitHighScoresEl.addEventListener('click', recordHighScores);
  }

if (clearHighScoresEl) {
  // Not called
  clearHighScoresEl.addEventListener('click', clearHighScores);
  }

var latestScore = 0;

// Set up high score parameters
var number_of_high_scores = 5;

// Clear High Scores

function clearHighScores() {

  localStorage.clear();

  highScoreListEl.innerHTML = "No highscores available";

}

function finalScore ()
{
  console.log("renderHighScores called");

  feedbackEl.classList.replace('show', 'hide');
  nextButton.classList.replace('show', 'hide');
  questionsEl.classList.replace('show', 'hide');
  endScreenEl.classList.replace('hide', 'show');

  finalScoreEl.textContent = score;

}

function recordHighScores ()
{
   if (localStorage.getItem("highScores"))
   {
     highScores = localStorage.getItem("highScores")
   }
    
  console.log("this is just the console log = " + score);
  console.log("this is just the console log = " + initialsEl.value);

  localStorage.setItem("latestScore", score);
  localStorage.setItem("initials", initialsEl.value);

  const thisGo = Object.create(initialsAndScore)

  thisGo.initials = initialsEl.value;
  thisGo.score = score;

  console.log("highScores = " + highScores);

  console.log("thisGo = " + JSON.stringify(thisGo));

  console.log("highScores typeof = " + typeof(highScores));

  highScores = JSON.parse(highScores);

  highScores.push(thisGo);

  console.log(highScores);

  localStorage.setItem("highScores", JSON.stringify(highScores));



 // highScoresTable();

  window.location.href = "highscores.html";

}

function highScoresTable()
{
  var scoreTable = localStorage.getItem("highScores");

  scoreTable = JSON.parse(scoreTable);

  console.log(scoreTable[0].initials);
  console.log(scoreTable[0].score);

  highScoreListEl.innerHTML = scoreTable.map((object) => `<li>${object.score} - ${object.initials}`).join('');

}

function checkAnswer(answer)
{   
  console.log("checkAnswer called");
    // If the answer is correct then update the feedback content and show the feedback
    if (answer == all_questions[i].correct)
    {
        feedbackEl.textContent = "Correct!"
        var audio = new Audio('../starter/assets/sfx/correct.wav');
        score = score + 5;
        audio.play();
    }
    else
    {
        feedbackEl.textContent = "Wrong!"
        var audio = new Audio('../starter/assets/sfx/incorrect.wav');     
        secondsLeft = secondsLeft - 10;
        audio.play();
    }

    console.log(all_questions.length);
    console.log(i);

    if (i == all_questions.length - 1)
    {
        nextButton.textContent = "See results";
        nextButton.classList.add("seeResults");
        nextButton.removeEventListener("click", renderQuestion);
        nextButton.addEventListener("click", finalScore);
    }

    feedbackEl.classList.replace('hide', 'show');
    nextButton.classList.replace('hide', 'show');

    i++;
}