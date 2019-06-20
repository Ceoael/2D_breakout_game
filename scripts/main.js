// BALL SPEED
var dx = 0;
var dy = -2;

var rightPressed = false;
var leftPressed = false;

var animation;


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
   
    if(startNewGame && lives && score !== 15){

    drawPaddle();
    drawBricks();
    drawBall();
    showScore();
    showLives();
    collisionDetection();

    //BOUNCE BALL FROM WALLS
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius){
        dx = -dx;
        ballColor = randomColor();
    }

    //BOUNCE BALL FROM CEILING
    if(y + dy < ballRadius) {
        dy = -dy;
        ballColor = randomColor();
    } else if (y + dy > canvas.height-ballRadius){

        //BOUNCE FROM PADDLE
        if(x >= paddleX && x <= paddleX + paddleWidth){
            dy = -dy;

            if(x>paddleX+paddleWidth*0.475 && x < paddleX + paddleWidth*0.525){
                dx = 0;
            }
            else if(x>paddleX+paddleWidth*0.29 && x < paddleX + paddleWidth*0.475){
                dx = -2;
            }
            else if(x>paddleX+paddleWidth*0.525 && x < paddleX + paddleWidth*0.71){
                dx = 2;
            }
            else if(x>paddleX+paddleWidth*0.14 && x < paddleX + paddleWidth*0.29){
                dx = -4;
            }
            else if(x>paddleX+paddleWidth*0.525 && x < paddleX + paddleWidth*0.86){
                dx = 4;
            }
            else if(x>=paddleX && x < paddleX + paddleWidth*0.14){
                dx = -6;
            }
            else if(x>paddleX+paddleWidth*0.86 && x < paddleX + paddleWidth){
                dx = 6;
            }
        }

        else {

            //IF BALL DIDN'T HIT THE PADDLE
            lives--;
            if(!lives) {
                gameOverScreen(); 
            }
            else {
                //IF PLAYER HAS MORE LIVES
                x = canvas.width/2;
                y = canvas.height-30;
                dx = 0;
                dy = -2;
                paddleX = (canvas.width-paddleWidth)/2;
            }
        }
    }

    x += dx;
    y += dy;

    // MOVE PADDLE ONLY WITHIN BOUNDARIES OF THE CANVAS
    if(rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 5;
    } else if (leftPressed && paddleX > 0){
        paddleX -=5;
    }
}
    animation = requestAnimationFrame(draw);
}

function keyDownHandler(e) {
    
    if(e.key === "Right" || e.key === "ArrowRight"){
        rightPressed = true;
    }
    else if (e.key === "Left" || e.key === "ArrowLeft"){
        leftPressed = true;
    }
}

function keyUpHandler(e) {

    if(e.key === "Right" || e.key === "ArrowRight"){
        rightPressed = false;
    }
    else if (e.key === "Left" || e.key === "ArrowLeft"){
        leftPressed = false;
    }
}


document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);


animation = requestAnimationFrame(draw);
