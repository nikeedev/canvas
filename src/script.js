import { Size } from "./modules/functions.js";


/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var image = document.getElementById("circle");



var ImageSize = new Size(image.width/2, image.height/2);
const width = 660;
const height = 600;


var x = width/2-ImageSize.width;
var y = height/2-ImageSize.height;


var dy = 5;
var dx = 5;


ctx.clearRect(0, 0, width, height);
ctx.drawImage(image, x, y);


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
            if (y + dy < height - image.width){
                y += dy;
            }
            break;
        case 37: 
            if (x - dx > 0){
                x -= dx;
            }
            break;
        case 39:  
            if (x + dx < width - image.height){
                x += dx;
            }
            break;
    }
}


function draw() {
    
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(image, x, y);
}

init();
window.addEventListener('keydown',doKeyDown,true);
