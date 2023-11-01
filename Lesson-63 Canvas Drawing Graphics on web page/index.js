var c = document.querySelector("#myCanvas");
var ctx = c.getContext("2d");

ctx.lineWidth = 2;
ctx.strokeStyle = "black";
ctx.strokeRect(10,10,380,277);

ctx.fillStyle = "green"
ctx.fillRect(10,10,378,276);

var centerX = c.width / 2;
var centerY = c.height / 2;

ctx.beginPath();
ctx.arc(centerX,centerY,50,0,2*Math.PI,false);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();