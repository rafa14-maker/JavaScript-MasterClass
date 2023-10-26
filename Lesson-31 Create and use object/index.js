//student details
// How create a object
// How to print the object
//Property template
// adding a contructor
// adding function inside contructor


name = "fahim hossain rafayet";
age = 26;
cgpa = 3.8;
lang = ['english','bangla','arabic'];

console.log(age);

function Student(name , age, cgpa, lan){
     this.name = name;
     this.age = age;
     this.cgpa = cgpa;
     this.lang = lan;

     this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.cgpa);
        console.log(this.lang);
     }
}

var student1 = new Student("fahim hossain rafayet",26,3.92,['english','bangla','arabic']);

student1.display();

// var student1 = {
//     name : "fahim hossain rafayet",
//     age : 26,
//      cgap : 3.89,
//      lang : ['english','bangla','arabic'], 
// }

// console.log(student1.age);

