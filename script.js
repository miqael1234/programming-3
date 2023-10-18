socket = io();
var side = 60;
var n = 15;
var m = 15;


function setup() {
    frameRate(5);
    createCanvas(n * side, m * side);
    background('#acacac');
}

function drawGame(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            rect(x * side, y * side, side, side);
        }

    }

}


socket.on('matrix', drawGame)