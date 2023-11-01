function display1()
{
    console.log("i am display1");
}

const display2 = () =>{
    console.log("i am display2");
}

display1();
display2();

function message(){
    return "ji";
}

const message1 = () =>  'ji';

console.log(message());
console.log(message1());


function add(num1,num2){
  return num1 + num2;
}

const add1 = (num1,num2) => num1 + num2;


console.log(add(2+3));
console.log(add1(2+3));
