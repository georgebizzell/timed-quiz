// Selects element by id

var initials;

var highScoreListEl = document.querySelector("#highscores");

var submitHighScoresEl = document.querySelector("#submit");

var clearHighScoresEl = document.querySelector("#clear");

var score = 0;

//Set Event Listener

console.log(submitHighScoresEl); // null

// Check if element exists before calling addEventListener()
if (submitHighScoresEl) {
  // Not called
  submitHighScoresEl.addEventListener('click', getInitials);
  }

if (clearHighScoresEl) {
  // Not called
  clearHighScoresEl.addEventListener('click', clearHighScores);
  }

var latestScore = 0;

// Set up high score parameters
var number_of_high_scores = 5;
var high_scores = 'highScores';

// Clear High Scores

function clearHighScores() {

  localStorage.clear();

  highScoreListEl.innerHTML = "No highscores available";

}

// Set score and initials before switching html page

function getInitials() {

  var initials = document.getElementById("initials").value;

  localStorage.setItem("initials", initials);

  localStorage.setItem("latestScore", score);

  console.log("Initials = " + initials);

  console.log("Scores = " + score);

  checkHighScores(localStorage.getItem("latestScore"));
  
  window.location.href="./highscores.html";
  
  }


function renderHighScores ()
  {
    console.log("renderHighScores called");
      feedbackEl.classList.replace('show', 'hide');
      nextButton.classList.replace('show', 'hide');
      questionsEl.classList.replace('show', 'hide');
      endScreenEl.classList.replace('hide', 'show');
      finalScoreEl.textContent = score;
      localStorage.setItem("latestScore", score);
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
        nextButton.addEventListener("click", renderHighScores);
    }

    feedbackEl.classList.replace('hide', 'show');
    nextButton.classList.replace('hide', 'show');

    i++;
}

//Highscores logic - with help from this site https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68



function checkHighScores(score) {

  console.log("checkHighScores called");

  const highScoreString = localStorage.getItem("high_scores");

  const highScores = JSON.parse(highScoreString) ?? [];

  const lowestScore = highScores[number_of_high_scores-1]?.score ?? 0;

  console.log("Lowest score = " + lowestScore);

  console.log("Current score = " + localStorage.getItem("latestScore"));

  score = localStorage.getItem("latestScore");

if (score >= lowestScore) {

  saveHighScore(score, highScores);

}
}

function saveHighScore(score, highScores)
{
  console.log("saveHighScores called");

  initials = localStorage.getItem("initials");

  console.log("This is initials from local storage = " + localStorage.getItem("initials"));

  // Create new highscore key value pair

  const newScore = {score, initials};

  console.log(newScore);

  console.log("this is score = " + score + "this is initials = " + initials);

  // Add the new key value pair to the high scores list

  console.log("highScores = " + highScores);   
  
  highScores.push(newScore);

  // Sort the list descending - with help from here https://www.w3schools.com/js/js_array_sort.asp
  // If the result is negative, a is sorted before b
  // If the result is positive, b is sorted before a
  highScores.sort((a, b) => b.score - a.score);

  // Select new list by splicing the list and keeping the 5 highest scores
  highScores.splice(number_of_high_scores);

  // Save new high score list
  localStorage.setItem(high_scores, JSON.stringify(highScores));

  localStorage.setItem("highScores", highScores);

  var checksaving = localStorage.getItem("highScores");

  console.log(checksaving);

}

function renderHighScores() {
   
  console.log("renderHighScores called");

  var highScores = localStorage.getItem("highScores");

  console.log(highScores);

   if (highScores)
   {
    highScoreListEl.innerHTML = highScores.map((score) => `<li>${score.score} - ${score.initials}`);
   }
      
}