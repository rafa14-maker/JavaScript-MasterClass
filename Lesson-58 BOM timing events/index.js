let btn = document.querySelector(".btn");
let p1 = document.querySelectorAll('p')[0];
let p2 = document.querySelectorAll('p')[1];
let counter = 0;


btn.addEventListener('click',function(){
    
   p1.textContent = "you ok";

   setTimeout(function() {
    p1.textContent = "";
   },1000);

   counter=0;

   setInterval(function(){
    p2.textContent = counter;
    counter ++;
   },1000);

});