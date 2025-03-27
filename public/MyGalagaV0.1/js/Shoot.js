var ballX;
var ballY;
var ballSpeedX;
var ballSpeedY;
var isBallShot = false; // Keep track of whether the ball has been shot


function ballReset() {
	ballSpeedX = 0.1;
	ballSpeedY = -10;
	
    ballX = shipPost;
    ballY = shipPostY - 80;

	isBallShot = false; // Reset shot status when the ball resets

}

function ballMove(){

	if (!isBallShot) return; // If the ball hasn't been shot, don't update its position

	ballX += ballSpeedX;
	ballY += ballSpeedY;
		
	// Ball bounces off walls
	if (ballX < 0 && ballSpeedX < 0.0) { 
		ballSpeedX *= -1;
	}
	if (ballX > canvas.width && ballSpeedX > 0.0) { 
		ballSpeedX *= -1;
	} 
	
	// Ball hits top, reset
	if (ballY < 0 && ballSpeedY < 0.0) { 
		ballReset();
	}
	
	// Ball hits bottom, also stop movement
	if (ballY > canvas.height) { 
		ballReset();
		
	}
}
function ballBrickHandling() {

    // Adjust for the brick offset
    let offsetX = (canvas.width - (BRICK_COLS * (BRICK_W + BRICK_GAP))) / 2;
    let offsetY = (canvas.height - (BRICK_ROWS * (BRICK_H + BRICK_GAP))) / 6;

    // Find which brick the ball is hitting
    var ballBrickCol = Math.floor((ballX - offsetX) / (BRICK_W + BRICK_GAP));
    var ballBrickRow = Math.floor((ballY - offsetY) / (BRICK_H + BRICK_GAP));

    // Check if the ball is within the grid bounds
    if (ballBrickCol < 0 || ballBrickCol >= BRICK_COLS || 
        ballBrickRow < 0 || ballBrickRow >= BRICK_ROWS) {
        return;
    }

    var brickIndexUnderBall = rowColToArrayIndex(ballBrickCol, ballBrickRow);

    // Check if a brick exists at this position
    if (brickGrid[brickIndexUnderBall]) {
        brickGrid[brickIndexUnderBall] = false; // Remove the brick
        bricksLeft--;

        // Ball bounces off the brick
       	ballReset();

        return;
    }
}
