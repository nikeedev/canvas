const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = 660;
const height = 600;

var x = 200;
var y = 200;
var size = 15;
var dy = 5;
var dx = 5;


ctx.clearRect(0, 0, width, height);
ctx.fillStyle = "#5d73f0";
ctx.fillRect(0, 0, width, height);
ctx.fillStyle = "#ffffff";
ctx.fillRect(x, y, 10, 10);


function init() {
    return setInterval(draw, 10);
}

function doKeyDown(evt){
    switch (evt.keyCode) {
        case 38:  
            if (y - dy > 0){
                y -= dy;
            }
            break;
        case 40: 
            if (y + dy < height - size){
                y += dy;
            }
            break;
        case 37: 
            if (x - dx > 0){
                x -= dx;
            }
            break;
        case 39:  
            if (x + dx < width - size){
                x += dx;
            }
            break;
    }
}


function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#5d73f0";
    ctx.strokeStyle = "black";
    
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, size, size);
}

init();
window.addEventListener('keydown',doKeyDown,true);

