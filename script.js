var quizQuestions = [
    {
        question: "Which of the following keywords is used to define a variable in JavaScript?",
        choices: ["1. let", "2. var", "3. for", "4. git"],
        answer: 1,
    },
    {
        question: "Which of the following methods is used to access HTML Elements using Javascript?",
        choices: ["1. getElementbyId()", "2. getElementbyClassName()", "3. Both A and B", "4. None of the above"],
        answer: 2,
    },
    {
        question: "Which of the following is used to create web pages?",
        choices: ["1. HTML", "2. Toaster", "3. ChatGPT", "4. DVD"],
        answer: 0,
    },
    {
        question: "Which of the following characters defines a class in CSS?",
        choices: ["1. !", "2. .", "3. #", "4. ?"],
        answer: 1,
    },
    {
        question: "Which of the following characters defines an Id in CSS?",
        choices: ["1. ID", "2. .", "3. %", "4. #"],
        answer: 3,
    },

]


var startButton = document.querySelector(".btn");
var secondsLeft = 60;
var timeEl = document.querySelector(".gameTimer");
var questionBox = document.querySelector(".questionBox");
var score = 0
var currentQuestionIndex = 0;
var timerInterval;

function displayQuestion(index) {
    var question = quizQuestions[index];
    questionBox.textContent = question.question + "\n";

    for (var i = 0; i < question.choices.length; i++) {
        let choiceButton = document.createElement("button");
        choiceButton.textContent = question.choices[i];
        choiceButton.addEventListener("click", function () {
            checkAnswer(this.textContent);
        });
        questionBox.appendChild(choiceButton);
    }
};

function checkAnswer(selectedChoice) {
    var currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedChoice === currentQuestion.choices[currentQuestion.answer]) {
        score++;
    } else {
        secondsLeft = Math.max(secondsLeft - 10, 0);
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion(currentQuestionIndex);

    } else {
        clearInterval(timerInterval);
        currentQuestionIndex = "";
        /*var initials = prompt("Enter your initials");
        sendMessage();*/
        var highScore = localStorage.getItem("highScore");
        if (!highScore || score > parseInt(highScore)) {
            localStorage.setItem("highScore", score);
        };
        displayScore();
    }
};

function sendMessage() {
    alert("Quiz ended!\nYour score: " + score);
};

function displayScore() {
    var displayScore = document.createElement("h1");
    displayScore.textContent = "Nice job!\n Your score:" + score;
    questionBox.appendChild(displayScore);
};

function startQuiz() {
    secondsLeft = 60;
    score = 0;
    currentQuestionIndex = 0;
    timeEl.textContent = "Time left" + secondsLeft;
}


startButton.addEventListener("click", function () {


    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time left: " + secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            var initials = prompt("Enter your initials");
            sendMessage();
            var highScore = localStorage.getItem("highScore");
            if (!highScore || score > parseInt(highScore)) {
                localStorage.setItem("highScore", score);
            }
        }
    }, 1000);

    displayQuestion(currentQuestionIndex);
}
);

startButton.addEventListener("click", startQuiz);



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