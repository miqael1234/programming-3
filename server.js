var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("../programming-3"));
app.get("/", function (req, res) {
    res.redirect("index.html");
});
server.listen(3001, function () {
    console.log("App is running on port 3000");
});

let random = require("./random");
let Grass = require("./class")
let GrassEater = require("./GrassEater")
let Predator = require("./Predator")
var n = 15;
var m = 15;
matrix = [];
grassArr = [];
grassEaterArr = [];
predatorArr = [];




function createGame() {

    for (let i = 0; i < n; i++) {
        matrix.push([])
        for (let j = 0; j < m; j++) {
            matrix[i].push(0)
        }
    }


    function characters(index, count) {
        for (let i = 0; i < count; i++) {
            var v = Math.floor(random(n))
            var w = Math.floor(random(m))
            matrix[v][w] = index
        }
    }
    characters(1, 10);
    characters(2, 10);
    characters(3, 10);

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

function drawGame() {
    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }

    for (var i in predatorArr) {
        predatorArr[i].eat();
    }
    io.emit('matrix', matrix)
}

createGame()
let intervalID
function startGame() {
    clearInterval(intervalID)
    setInterval(() => {
        drawGame()
    }, 1000);
}

io.on("connection", function (socket) {
    socket.emit("matrix", matrix)
    startGame()
});
