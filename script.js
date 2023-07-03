const quizQuestions = [
    {
        question: "Which of the following keywords is used to define a variable in JavaScript?",
        choices: ["let", "var", "for", "git"],
        answer: 1,
    },
    {
        question: "Which of the following methods is used to access HTML Elements using Javascript?",
        choices: ["getElementbyId()", "getElementbyClassName()", "Both A and B", "None of the above"],
        answer: 2,
    },
    {
        question: "Which of the following is used to create web pages?",
        choices: ["HTML", "Toaster", "ChatGPT", "DVD"],
        answer: 0,
    },
    {
        question: "Which of the following characters defines a class in CSS?",
        choices: ["!", ".", "#", "?"],
        answer: 1,
    },
    {
        question: "Which of the following characters defines an Id in CSS?",
        choices: ["ID", ".", "%", "#"],
        answer: 3,
    },

]

var startButton = document.querySelector(".btn");
var secondsLeft = 60;
var timeEl = document.querySelector(".gameTimer");
var questionBox = document.querySelector(".questionBox");



startButton.addEventListener("click", function () {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time left: " + secondsLeft;

        if (secondsLeft === 0) {
            var initials = prompt("Enter your initials");
            clearInterval(timerInterval);
            sendMessage(playAgain);
        }
    }, 1000)
});




/* chatGPT code
   for (var i = 0; i < quizQuestions.length; i++) {
   var questionElement = document.createElement("h3");
   questionElement.textContent = quizQuestions[i].question;
   questionBox.appendChild(questionElement);

   var choicesElement = document.createElement("ul");
   for (var j = 0; j < quizQuestion[i].choices.length; j++) {
       var choiceElement = document.createElement("li");
       choiceElement.textContent = quizQuestions[i].choices[j];
       choicesElement.appendChild(choiceElement);
   }
   questionBox.appendChild(choicesElement);
};*/