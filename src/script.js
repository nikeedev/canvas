import { Size } from "./modules/functions.js";


/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


var RectSize = new Size(20, 20);
const width = 1200;
const height = 400;


var x = width/2-RectSize.width/2;
var y = height/2-RectSize.height/2;


onload = () => {
    window.requestAnimationFrame(gameLoop);
}


let movingSpeed = 0.9;
let secondsPassed;
let oldTimeStamp;
let fps;

function gameLoop(timeStamp) {

    // Calculate the number of seconds passed since the last frame
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

    // Calculate fps
    fps = Math.round(1 / secondsPassed);


    // Perform the drawing operation
    window.addEventListener('keydown', e => {
        switch (e.keyCode) {
            case 38:  
                if (y > 0){
                    y -= (movingSpeed * secondsPassed);
                }
                break;
            case 40: 
                if (y < height - RectSize.width){
                    y += (movingSpeed * secondsPassed);
                }
                break;
            case 37: 
                if (x > 0){
                    x -= (movingSpeed * secondsPassed);
                }
                break;
            case 39:  
                if (x < width - RectSize.height){
                    x += (movingSpeed * secondsPassed);
                }
                break;
        }
    }, true);

    draw();

    // Draw number to the screen
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 200, 100);
    ctx.font = '25px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText("FPS: " + fps, 10, 30);


    // The loop function has reached it's end. Keep requesting new frames
    window.requestAnimationFrame(gameLoop);
}


function draw() {   
    ctx.clearRect(0, 0, width, height);
    ctx.fillRect(x, y, RectSize.width, RectSize.height);
}
   