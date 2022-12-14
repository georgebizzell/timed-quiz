var questionsEl = document.querySelector("#questions");
var questionTitleEl = document.querySelector("#question-title");
var choicesEl = document.querySelector("#choices");
var startScreenEl = document.querySelector("#start-screen");

var startButton = document.querySelector("#start");

startButton.addEventListener("click", showQuestions);

var i = 0;

function showQuestions() {
    startScreenEl.setAttribute("class", "hide");
    questionsEl.setAttribute("class", "show");
    setQuestion(all_questions[i]);
}

function setQuestion (question) {
    questionTitleEl.innerHTML = question.question_string;
    addElement();
}

// Div element creation function template from MDN here: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

function addElement() {
  // create a new div element
  const newDiv = document.createElement("button");

  // and give it some content
  const newContent = document.createTextNode("This is a choice");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("choices");
  console.log(newDiv);
  console.log(currentDiv);
  currentDiv.appendChild(newDiv);
}


// Coding questions from here - https://www.interviewbit.com/javascript-mcq/
// Array of objects

var all_questions = [{
    question_string: "Javascript is an _______ language",
    choices: ["Object oriented", "Object based", "Object procedural", "None of the above"],
    answer: "Object oriented"
   },
   {
    question_string: "Which of the following keywords is used to define a variable in Javascript?",
    choices: ["var", "let", "A and B", "None of the above"],
    answer: "Both A & B"
   }, 
   {
    question_string: "Which of the following methods is used to access HTML elements using Javascript?",
    choices: ["Both A & B", "getElementbyId()", "getElementbyClassName()", "None of the above"],
    answer: "Both A & B"
    },
    {
    question_string: "Upon encountering empty statements, what does the Javascript Interpreter do?",
    choices: ["Ignores the statements", "Throws an error", "Gives a warning",  "None of the above"],
    answer: "Ignores the statements"
    },
    {
     question_string: "Which of the following methods can be used to display data in some form using Javascript?",
     choices: ["console.log()", "window.alert()", "document.write()", "All of the above"],
     answer: "All of the above"
    }];