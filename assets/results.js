

const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const playerScore = document.querySelector('#playerScore')
var mostRecentTime = localStorage.getItem('recenttime')
var button = $('button')

const highScores =  JSON.parse(localStorage.getItem('highScores')) || []



playerScore.innerText = "Your Score Is  " + mostRecentTime



username.addEventListener('keyup', () => {
saveScoreBtn.disabled = !username.value
})


saveHighScore = e => {
    e.preventDefault()

    const score = {
        time: mostRecentTime,
        name: username.value
    }
    highScores.push(score)
    console.log(score);

    highScores.sort((a, b) => {
        return b.score - a.score
    })


localStorage.setItem('highScores', JSON.stringify(highScores))
window.location.assign('highscore.html')
}
button.on('click', saveHighScore);
