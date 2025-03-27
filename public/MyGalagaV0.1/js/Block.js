const BRICK_W = 100;
const BRICK_H = 40;
const BRICK_GAP = 10;
const BRICK_COLS = 10;
const BRICK_ROWS = 10;


var brickGrid = new Array(BRICK_COLS * BRICK_ROWS);
var bricksLeft = 0;


function brickReset() {
	bricksLeft = 0;
	var i = 0;
	for(; i < 2 * BRICK_COLS; i++){
		brickGrid[i] = false;
	}
	for(; i < BRICK_COLS * BRICK_ROWS; i++){
		brickGrid[i] = true;
		bricksLeft++;
	} // end of for each brick
} // end of brickReset function

function drawBricks() {
    // Calculate the starting position to center the bricks
    let offsetX = (canvas.width - (BRICK_COLS * (BRICK_W + BRICK_GAP))) / 2;
    let offsetY = (canvas.height - (BRICK_ROWS * (BRICK_H + BRICK_GAP))) / 6; // Moved bricks higher

    for (var eachRow = 0; eachRow < BRICK_ROWS; eachRow++) {
        for (let eachCol = 0; eachCol < BRICK_COLS; eachCol++) {
            var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
            
            if (brickGrid[arrayIndex]) {
                let brickX = offsetX + eachCol * (BRICK_W + BRICK_GAP);
                let brickY = offsetY + eachRow * (BRICK_H + BRICK_GAP);
                
                colorRect(brickX, brickY, BRICK_W - BRICK_GAP, BRICK_H - BRICK_GAP, 'blue');
            }
        }
    }
}

function isBrickAtColRow(col, row) {
	if( col >= 0 && col < BRICK_COLS && 
		row >= 0 && row < BRICK_ROWS){
			var brickIndexUnderCoord = rowColToArrayIndex(col, row);
			return brickGrid[brickIndexUnderCoord];
	} else {
		return false;
	}
}


function rowColToArrayIndex(col, row){
	return col + BRICK_COLS * row;
}