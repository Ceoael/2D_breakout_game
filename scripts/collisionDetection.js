function collisionDetection(){
    for(var c=0; c<brickColumnCount; c++) {
        for(var r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status === 1) {

                let testX = x;
                let testY = y;

                if(x < b.x) testX = b.x;
                else if( x > b.x+brickWidth)testX=b.x+brickWidth;

                if(y < b.y)testY=b.y;
                else if(y > b.y+ brickHeight)testY=b.y+ brickHeight;

                let distX = x - testX;
                let distY = y - testY;
                let distance = Math.sqrt((distX*distX)+(distY*distY));
                if (distance <= ballRadius){
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if(score === brickRowCount*brickColumnCount) {
                        gameOverScreen(); 
                    }
                }
            }
        }
    }
}