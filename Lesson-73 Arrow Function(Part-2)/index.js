var students = [
  {  id : 101,
    name : 'fahim hossain',
    gpa : 3.65
  },
  {
    id : 102,
    name : 'Rafayet',
    gpa : 3.65
  },
  {
    id : 567,
    name :'rose',
    gpa : 4.00
  },
  {
    id : "890",
    name : 'Killua',
    gpa : '2.30'
  }
]

console.log(students);

function studentName1(){
   return   students.filter(function(x){
       return  x.gpa > 3;
     }).map(function(y){
             return y.name;
     })
}

const studentName2 = () => students.filter((x)=> x.gpa>3).map((y) => y.name);




console.log(studentName1());
console.log(studentName2());