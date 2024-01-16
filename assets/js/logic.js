let startButton = document.getElementById('start');
let timerElement = document.getElementById('time');
let initials = document.getElementById('initials');
let submitButton = document.getElementById('submit');

let timer;
    let timeLeft;
    let questionIndex;
    let scores;

startButton.addEventListener('click', startQuiz);

function startQuiz() {
    startButton.parentElement.classList.add('hide');
    document.getElementById('questions').classList.remove('hide');
    timeLeft = 60;
    questionIndex = 0;
    scores = 0;

    startTimer();
    setNextQuestion();
  }

  function startTimer() {
    timer = setInterval(function () {
      timerElement.textContent = timeLeft;
      timeLeft--;

      if (timeLeft < 0) {
        timerElement.textContent= timeLeft
      }
      else{ 
        timerElement.textContent= timeLeft
        stop();
      }
        },1000);

    }
    function setNextQuestion() {
        resetState();
        const currentQuestion = questions[questionIndex];
        showQuestion(currentQuestion);
      }
    