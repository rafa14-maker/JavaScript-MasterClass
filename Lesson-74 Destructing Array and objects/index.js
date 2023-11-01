// array destructure

let numbers=[10,20,30,40,50]

let [num1,num2,...z] = numbers;

console.log(num1);

// array swap

let a = 10, b = 20;

[a,b] = [b,a]

// object destructure

const studentinfo = {
    id : 101,
    name : 'fahim',
    cgpa : 3.92
}

const {id, name} = studentinfo

console.log(id);

// destructuing function parameter 

const studentInfo = ({id , name}) =>{
    console.log(`${id} , ${name}`);
}

const student ={
    id : 101,
    fullname : "fahim",
}

studentInfo(student);




