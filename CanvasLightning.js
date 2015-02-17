var dimensions = [document.documentElement.clientWidth, document.documentElement.clientHeight];
var canvas = document.getElementById("myCanvas");
canvas.width = dimensions[0];
canvas.height = dimensions[1];
window.addEventListener("resize", setCanvasDimensions);
var context = canvas.getContext('2d');
var lastX = context.canvas.width * Math.random();
var lastY = context.canvas.height * Math.random();
var hue = 0;

function line() {
    context.save();
    for (var j = 0; j < 20; j++) {
        context.beginPath();
        context.lineWidth = Math.random();
        lastX = context.canvas.width * Math.random();
        lastY = 0;

        context.moveTo(lastX, lastY);
        for (var i = 0; lastY < context.canvas.height; i++) {
            context.lineTo(
              lastX = lastX + 15 * Math.random() - 15 * Math.random(),
              lastY = lastY + 10 * Math.random() - 1 * Math.random()
            );
        }

        context.strokeStyle = 'white';
        context.shadowColor = 'white';
        context.shadowBlur = 10;
        context.stroke();
    }
    context.restore();
}

function clear() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}

function blank() {
    context.fillStyle = 'rgba(0,0,0,0.1)';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
}

function setCanvasDimensions(){
  dimensions = [document.documentElement.clientWidth, document.documentElement.clientHeight];
  canvas.width = dimensions[0];
  canvas.height = dimensions[1];
}

setInterval(line, 500);
setInterval(blank, 30);