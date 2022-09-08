const startbutton = document.getElementById('start-btn')
const questionContainer = document.getElementById('question-container')
const highscore = document.getElementById('highscore')
const result = document.getElementById('result')
const triviaEL = document.getElementById('question')
const choiceButtonEL = document.getElementById('answer-buttons')
const quizTitle = document.getElementById('QuizTitle')
let time = 80;


const timerEl = document.getElementById('timer')



let shuffledQuestions, currentQuestionIndex




startbutton.addEventListener("click", startQuiz)
choiceButtonEL.addEventListener("click", () => {
    currentQuestionIndex++,
    nextQuestion()
} )

function startQuiz() {
    console.log('Welcome to JEOPARDY!')
    startbutton.classList.add('hide')
    shuffledQuestions= trivia.sort(() => Math.random() - .6)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    quizTitle.classList.add('hide')
    updatetimerEl()
    nextQuestion()
    let refreshIntervalId = setInterval(updatetimerEl, 1000)
    if (time == 0) { 
        clearInterval(refreshIntervalId);
    }
   

}
function updatetimerEl() {
        
    timerEl.innerHTML = "Time: " + time;
   
    time--;

    }




function nextQuestion()  {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
   

}

function showQuestion(question) {
    triviaEL.innerText = question.question
    question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    choiceButtonEL.appendChild(button)
    })
}
function resetState() {
    while (choiceButtonEL.firstChild) {
        choiceButtonEL.removeChild
        (choiceButtonEL.firstChild)
    }

}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusText(document.getElementById('result'), correct)
    
      
 
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    
  }else {
    localStorage.setItem('recenttime', time)
    return window.location.assign('assets/results.html')
  }

    

  }
  
  function setStatusText(element, correct) {
    if (correct) {
        correct == true
      element.innerHTML= "You got it right!";
    } else {
      element.innerHTML="Wrong, Try Again!";
      time -= 10

    }
  }

  function GotoHighScores(){
    return window.location.assign('assets/highscore.html')
  }
 
  highscore.addEventListener("click", GotoHighScores);

  


var trivia = [
    {
        
             question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            {text: '<script>', correct: true},
             {text: '<javascript>', correct: false},
             {text: '<js>', correct: false},
             {text: 'None of the above', correct: false}


]


    },
    {
        question: 'Which What is the correct JavaScript syntax to write "Hello World"?',
        answers: [
            {text: '"Hello World"', correct: false},
             {text: 'response.write("Hello World")', correct: false},
             {text: 'document.write("Hello World")', correct: true},
             {text: 'None of the above', correct: false}

]


    },
    {
        question: 'An external JavaScript must contain the <script> tag',
        answers: [
            {text: 'False', correct: true},
             {text: 'True', correct: false},

]


    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        answers: [
            {text: 'the <body> section', correct: false},
             {text: 'the <head> section', correct: false},
             {text: 'None of the Above', correct: false},
             {text: 'Both the <head> section and the <body> section are correct', correct: true}
]


    },
    {
        
             question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answers: [
            {text: '<script name="xxx.js">', correct: false},
             {text: '<script value="xxx.js">', correct: false},
             {text: '<script src="xxx.js">', correct: true},
             {text: '<script href="xxx.js">', correct: false}


]


    },
    {
        question: 'How do you create a function?',
        answers: [
            {text: 'function:myFunction()', correct: false},
             {text: 'function myFunction()', correct: true},
             {text: 'function=myFunction()', correct: false},
             {text: 'Functions', correct: false}
]
    }

]