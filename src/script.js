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

<<<<<<< HEAD
function doKeyDown(evt){
=======

function doKeyDown(evt){

>>>>>>> 0ee1ad3fcf46f6be2f8a885da2325c7e66fc198f
    switch (evt.keyCode) {
        case 38:  
            if (y - dy > 0){
                y -= dy;
            }
            break;
        case 40: 
<<<<<<< HEAD
            if (y + dy < height - size){
=======
            if (y + dy < height - image.width){
>>>>>>> 0ee1ad3fcf46f6be2f8a885da2325c7e66fc198f
                y += dy;
            }
            break;
        case 37: 
            if (x - dx > 0){
                x -= dx;
            }
            break;
        case 39:  
<<<<<<< HEAD
            if (x + dx < width - size){
=======
            if (x + dx < width - image.height){
>>>>>>> 0ee1ad3fcf46f6be2f8a885da2325c7e66fc198f
                x += dx;
            }
            break;
    }
}


function draw() {
<<<<<<< HEAD
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#5d73f0";
    ctx.strokeStyle = "black";
    
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, size, size);
=======
    
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(image, x, y);
>>>>>>> 0ee1ad3fcf46f6be2f8a885da2325c7e66fc198f
}

init();
window.addEventListener('keydown',doKeyDown,true);
<<<<<<< HEAD

=======
>>>>>>> 0ee1ad3fcf46f6be2f8a885da2325c7e66fc198f
