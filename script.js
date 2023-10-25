socket = io();
var side = 60;
var n = 15;
var m = 15;
var flag = false;
var flagAnshun = false;
var werAnshun = false;
var menAnshun = false;
var framAnshun = false;


function setup() {
    frameRate(5);
    createCanvas(n * side, m * side);
    background('#acacac');
}

function drawGame(matrix) {

    var tumo = document.getElementById("tumo");
    tumo.addEventListener("click", clickHandler, false);
    tumo.myParam = matrix;


    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1 && flag == false && flagAnshun == false && werAnshun == false && menAnshun == false && framAnshun == false)  {
                fill("green");
            } else if(matrix[y][x] == 1 && flag == true && flagAnshun == false && werAnshun == false && menAnshun == false && framAnshun == false){
                fill('black');
                text('Tumo', x * side, y * side)
                fill("blue");
            } else if(matrix[y][x] == 1 && flagAnshun == true){
                fill("orange");
             } else if(matrix[y][x] == 1 && menAnshun == true){
                fill("grey");
            } else if(matrix[y][x] == 1 && werAnshun == true){
                fill("white");
            } else if(matrix[y][x] == 1 && framAnshun == true){
                fill("brown");
           
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



function clickHandler(evt){
    matrix = evt.currentTarget.myParam;

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                flag = true;
                fill('black');
                text('Tumo', x * side, y * side)
                fill("blue");
            }
        }
    }
}

var clean = document.getElementById("clean");
clean.addEventListener("click", clickHandlerClean, false);

function clickHandlerClean(evt){
    flag = false;
    flagAnshun = false;
    werAnshun = false;
    menAnshun =false;
    framAnshun = false;
}

var ashunbtn = document.getElementById("ashun");
ashunbtn.addEventListener("click", ashun, false);

function ashun(evt){
     flagAnshun = true;
}


var dzermbtn = document.getElementById("dzmer");
dzermbtn.addEventListener("click", dzmer, false);

function dzmer(evt){
     werAnshun = true;
}

var amarmbtn = document.getElementById("amar");
amarmbtn.addEventListener("click", amar, false);

function amar(evt){
     menAnshun = true;
}

var garunmbtn = document.getElementById("garun");
amarmbtn.addEventListener("click", garun, false);

function amar(evt){
     framAnshun = true;
}