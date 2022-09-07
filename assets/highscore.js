const highScoreList = document.querySelector('#highScoreList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []
const clear = document.getElementById('clear')

highScoreList.innerHTML = 
highScores.map(score => {
    return `<li classs="high-score">${score.name} - ${score.time}</li>`
}
    )
    

.join('')    

clear.addEventListener("click", Clearhighscores)

function Clearhighscores(){

window.localStorage.clear()
}
