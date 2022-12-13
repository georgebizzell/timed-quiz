var questionsEl = document.querySelector("#questions");
var questionTitleEl = document.querySelector("#question-title");
var choicesEl = document.querySelector("#choices");
var startScreenEl = document.querySelector("#start-screen");

var startButton = document.querySelector("#start");

startButton.addEventListener("click", showQuestions);

function showQuestions() {
    questionsEl.setAttribute("class", "show");
    startScreenEl.setAttribute("class", "hide");
}
