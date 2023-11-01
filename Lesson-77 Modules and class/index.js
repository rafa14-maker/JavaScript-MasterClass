import{
     text ,setText
    } from './mymodule.js';

console.log(text);

setText('Hello hi');

console.log(text);

class Student{

    constructor(id,name){
             this.id = id;
             this.name = name;
    }
  
    set studentName(name){
        this.name = name;
    }

    get studentName(){
        return this.name;
    }

}

let s1 = new Student(101,'fahim');
console.log(s1);