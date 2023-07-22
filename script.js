var quizQuestions = [
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
var score = 0
var currentQuestionIndex = 0;

function displayQuestion(index) {
    var question = quizQuestions[index];
    questionBox.textContent = question.question + "\n";

    for (var i = 0; i < question.choices.length; i++) {
        var choiceButton = document.createElement("button");
        choiceButton.textContent = question.choices[i];
        choiceButton.addEventListener("click", function () {
            checkAnswer(this.textContent);
        });
        questionBox.appendChild(choiceButton);
    }
};

function checkAnswer(selectedChoice) {
    var currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedChoice === currentQuestion.answer + 1) {
        score++;
    } else { secondsLeft - 10; }
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion(currentQuestionIndex);

    } else {
        clearInterval(timerInterval);
        var initials = prompt("Enter your initials");
        sendMessage(playAgain);
    }
};


startButton.addEventListener("click", function () {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time left: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            var initials = prompt("Enter your initials");
            sendMessage(playAgain);

        }
    }, 1000);

    displayQuestion(currentQuestionIndex);
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
   questionBox.textContent += i + 1 + ". " + question.choices[i] + "\n";
};*/