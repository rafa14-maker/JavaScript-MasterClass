// spread oparetor 


function addNumbers(x,y,z){
    return x+y+z;
}

let numbers = [1,2,3];
console.log(addNumbers(...numbers));

let number1 = [5,6,...numbers];
console.log(number1);

let number2 = [...numbers , ...number1];
console.log(number2);

let p1 = {
    name : "fahim hossain",
    age : 30
}

let p2 = {
    na : "bangladesh",
    occi : 'teacher'
}

let p = {...p1, ...p2};
console.log(p);

