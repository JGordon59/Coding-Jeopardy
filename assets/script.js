const startbutton = document.getElementById('start-btn')
const questionConEL = document.getElementById('question-container')
const highscore = document.getElementById('highscore')
const result = document.getElementById('result')
const questionEL = document.getElementById('question')
const answerButtonEL = document.getElementById('answer-buttons')
const quizTitle = document.getElementById('QuizTitle')
let time = 80;


const timerEl = document.getElementById('timer')



let shuffledQuestions, currentQuestionIndex




startbutton.addEventListener("click", startQuiz)
answerButtonEL.addEventListener("click", () => {
    currentQuestionIndex++,
    nextQuestion()
} )

function startQuiz() {
    console.log('Quiz has Begun')
    startbutton.classList.add('hide')
    shuffledQuestions= questions.sort(() => Math.random() - .6)
    currentQuestionIndex = 0
    questionConEL.classList.remove('hide')
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
    questionEL.innerText = question.question
    question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonEL.appendChild(button)
    })
}
function resetState() {
    while (answerButtonEL.firstChild) {
        answerButtonEL.removeChild
        (answerButtonEL.firstChild)
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
      element.innerHTML= "Correct!";
    } else {
      element.innerHTML="Wrong!";
      time -= 10

    }
  }

  function GotoHighScores(){
    return window.location.assign('assets/highscore.html')
  }
 
  highscore.addEventListener("click", GotoHighScores);

  


var questions = [
    {
        question: 'What data type can a function return?',
        answers: [
            {text: 'string', correct: false},
             {text: 'number', correct: false},
             {text: 'boolean', correct: false},
             {text: 'all of the above', correct: true}

]


    },
    {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        answers: [
            {text: 'var', correct: false},
             {text: 'let', correct: false},
             {text: 'Both A and B', correct: true},
             {text: 'None of the above', correct: false}

]


    },
    {
        question: 'How can a datatype be declared to be a constant type?',
        answers: [
            {text: 'const', correct: true},
             {text: 'var', correct: false},
             {text: 'let', correct: false},
             {text: 'constant', correct: false}

]


    },
    {
        question: 'How to stop an interval timer in Javascript?',
        answers: [
            {text: 'clearInterval', correct: true},
             {text: 'clearTimer', correct: false},
             {text: 'intervalOver', correct: false},
             {text: 'None of the above', correct: false}

]


    },
    {
        question: 'Which of the following are closures in Javascript?',
        answers: [
            {text: 'Variables', correct: false},
             {text: 'All of the above', correct: true},
             {text: 'Objects', correct: false},
             {text: 'Functions', correct: false}

]


    },
    {
        question: 'Which of the following methods is used to access HTML elements using Javascript?',
        answers: [
            {text: 'getElementbyld()', correct: false},
             {text: 'getElementsByClassName()', correct: false},
             {text: 'Both A and B', correct: true},
             {text: 'None of the above', correct: false}

]
    }

]