
let questionTitleElement = document.getElementById('question-title');
let choicesElement = document.getElementById('choices');
let feedbackElement = document.getElementById('feedback');
let endScreenElement = document.getElementById('end-screen');
let finalScoreElement = document.getElementById('final-score');

const questions = [
    {
      title: 'Commonly used datatypes Do Not Include:',
      choices: ['string', 'booleans', 'alerts', 'numbers'],
      correctAnswer: 2,
    },
    {
      title: 'The condition in an if / else statement is enclosed with ______.',
      choices: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
      correctAnswer: 2,
    },
    {title:'Arrays in JavaScript can be used to store ________.',
      choices: ['numbers and strings', 'other arrayes', 'booleans', 'all of the above'],
      correctAnswer: 3,
    },
    {title:"String values must be ecclosed within ______ when being assigned to variables.",
     choices: ['commas', 'curly brackets', 'qoutes', 'parenthesis'],
    correctAnswer: 2,
    },
    {title:"A very useful tool used during development and debugging for printing content to the debugger is:",
   choices: ['javascript', 'terminal/bash', "for loops", 'console.log'],
    correctAnswer: 2,
    }
  ]

  function setNextQuestion() {
    resetState();
    const currentQuestion = questions[questionIndex];
    showQuestion(currentQuestion);
  }

  function showQuestion(question) {
    questionTitleElement.textContent = question.title;
    question.choices.forEach((choice, index) => {
      const button = document.createElement('button');
      button.textContent = choice;
      button.addEventListener('click', () => selectAnswer(index));
      choicesElement.appendChild(button);
    });
  }

  function resetState() {
    choicesElement.innerHTML = '';
    feedbackElement.textContent = '';
  }

  function selectAnswer(selectedIndex) {
    const currentQuestion = questions[questionIndex];
    const isCorrect = selectedIndex === currentQuestion.correctAnswer;

    if (isCorrect) {
      scores += 10;
    } else {
      timeLeft -= 10;
    }

    if (questionIndex < questions.length - 1) {
      questionIndex++;
      setNextQuestion();
    } else {
      endQuiz();
    }
  }

 