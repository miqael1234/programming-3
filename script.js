var matrix = [];
var side = 60;
var n = 15;
var m = 15;
for (let i = 0; i < n; i++) {
    matrix.push([])
    for (let j = 0; j < m; j++) {
        matrix[i].push(0)
    }
}

console.log(111);


function characters(index, count) {
    for (let i = 0; i < count; i++) {
        var v = Math.floor(random(0, n))
        var w = Math.floor(random(0, m))
        matrix[v][w] = index
    }
}


var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
function setup() {
    characters(1, 10);
    characters(2, 10);
    characters(3, 10);
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var grEa = new GrassEater(x, y, 1);
                grassEaterArr.push(grEa);
            }
            else if (matrix[y][x] == 3) {
                var pre = new Predator(x, y, 1);
                predatorArr.push(pre);
            }
        }
    }


}

function draw() {

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

    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }

    for (var i in predatorArr) {
        predatorArr[i].eat();
    }
}