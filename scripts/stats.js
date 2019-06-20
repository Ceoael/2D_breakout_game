const scoreDiv = document.querySelector("div.score");
const livesDiv = document.querySelector("div.lives");

var score = 0;
var lives = 3;

function showScore() {
    scoreDiv.textContent = `Score: ${score}`;
}

function showLives(){
    livesDiv.textContent = `Lives: ${lives}`;
}