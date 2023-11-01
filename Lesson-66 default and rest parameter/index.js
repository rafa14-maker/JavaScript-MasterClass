"use strict"

//deafult parameter

function message(text = "hello this is default"){
    console.log(text);
}

message();


// rest parametter
function sum( x, y, ...z){
    console.log(` x = ${x} , y = ${y} , z = ${z}`);
}

sum(10,20,50 , 60 ,70);