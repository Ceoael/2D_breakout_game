var paddleHeight = 10; 
var paddleWidth = 70; 
var paddleX = (canvas.width-paddleWidth) / 2; 

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight - 1, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0077b0";
    ctx.fill();
    ctx.closePath();
}