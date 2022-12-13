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

function setQuestion () {

}


// Coding questions from here - https://www.interviewbit.com/javascript-mcq/

var all_questions = [{
    question_string: "Javascript is an _______ language",
    choices: {
      correct: "Object orientied",
      wrong: ["Object based", "Object procedural", "None of the above"]
    }
  }, {
    question_string: "Which of the following keywords is used to define a variable in Javascript?",
    choices: {
      correct: "A and B",
      wrong: ["var", "let", "None of the above"]
    }
  }, {
    question_string: "Which of the following methods is used to access HTML elements using Javascript?",
    choices: {
      correct: "Both A & B",
      wrong: ["getElementbyId()", "getElementbyClassName()", "None of the above"]
    }
  }, {
    question_string: "Upon encountering empty statements, what does the Javascript Interpreter do?",
    choices: {
      correct: "Ignores the statements",
      wrong: ["Throws an error",  "Gives a warning",  "None of the above"]
    }
  },
  {
    question_string: "Which of the following methods can be used to display data in some form using Javascript?",
    choices: {
      correct: "All of the above",
      wrong: ["console.log()", "window.alert()", "document.write()"]
    }
  }];