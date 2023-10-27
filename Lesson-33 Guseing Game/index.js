
var num1 = parseInt(prompt("Enter your guess (from 1 to 5) :"));

var gues = (Math.random()*6);
gues = Math.floor(gues);

if(num1 == gues){
    document.write("Wow nice job !!");
}
else
{
    document.write("Wrong Prediction <br> Right number was "+gues);
}