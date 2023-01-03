// Set elements ready for changing attributes and event listeners
var questionsEl = document.querySelector("#questions");
var questionTitleEl = document.querySelector("#question-title");
var choicesEl = document.querySelector("#choices");
var startScreenEl = document.querySelector("#start-screen");
var feedbackEl = document.querySelector("#feedback");
var endScreenEl = document.querySelector("#end-screen");
var finalScoreEl = document.querySelector("#final-score");
var initialsEl = document.querySelector("#initials");


// Set buttons
var nextButton = document.querySelector("#next");
var startButton = document.querySelector("#start");


// Counter used to go through the questions
var i = 0;

// Time Limit
var timerInterval;

// Score Counter
var score = 0;

// Event listeners (answer checking is added as onclick funtion to the buttons themselves)
startButton.addEventListener("click", renderQuestion);
nextButton.addEventListener("click", renderQuestion);


function renderQuestion () {

    if(i == 0)
    {
        startTimer();
        score = 0;
    }

    var question = all_questions[i];

    feedbackEl.classList.replace('show', 'hide');
    nextButton.classList.replace('show', 'hide');

    startScreenEl.setAttribute('class', 'hide');
    questionsEl.classList.replace('hide', 'show');

    questionTitleEl.textContent = question.question_string;
    choicesEl.innerHTML = "";
    question.choices.forEach(addChoiceButton);
}

function checkAnswer(answer)
{   
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

// Button element creation function template from MDN here: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

function addChoiceButton(choiceText) {
  
  // create a new div element
  const newDiv = document.createElement("button");
  newDiv.id = choiceText;
  newDiv.setAttribute("onclick", "checkAnswer(this.id)");

  // and give it some content
  const newContent = document.createTextNode(choiceText);

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("choices");
  currentDiv.appendChild(newDiv);

}

function renderHighScores ()
{
    feedbackEl.classList.replace('show', 'hide');
    nextButton.classList.replace('show', 'hide');
    questionsEl.classList.replace('show', 'hide');
    endScreenEl.classList.replace('hide', 'show');
    finalScoreEl.textContent = score;
}


// Coding questions from here - https://www.interviewbit.com/javascript-mcq/
// Array of objects

var all_questions = [{
    question_string: "Javascript is an _______ language",
    choices: ["Object oriented", "Object based", "Object procedural", "None of the above"],
    correct: "Object oriented"
   },
   {
    question_string: "Which of the following keywords is used to define a variable in Javascript?",
    choices: ["var", "let", "Both of the above", "None of the above"],
    correct: "Both of the above"
   }, 
   {
    question_string: "Which of the following methods is used to access HTML elements using Javascript?",
    choices: ["getElementbyId()", "getElementbyClassName()", "Both of the above", "None of the above"],
    correct: "Both of the above"
    },
    {
    question_string: "Upon encountering empty statements, what does the Javascript Interpreter do?",
    choices: ["Ignores the statements", "Throws an error", "Gives a warning",  "None of the above"],
    correct: "Ignores the statements"
    },
    {
     question_string: "Which of the following methods can be used to display data in some form using Javascript?",
     choices: ["console.log()", "window.alert()", "document.write()", "All of the above"],
     correct: "All of the above"
    }];