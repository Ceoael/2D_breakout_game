// BALL STARTING POINT
var x = canvas.width/2;
var y = canvas.height-30;
var ballColor = "#0095DD"; 
var ballRadius = 10; 

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = ballColor;
    ctx.fill();
    ctx.closePath();
}