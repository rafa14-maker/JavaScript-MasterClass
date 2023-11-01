// for .. of and for ..in

const names = ['s1' , 's2' , 's3']
for(let name of names){
    console.log(name);
}

let students = {
    ID : 101,
    name : 'fahim hossain',
    cgpa : 3.91
}

for(let x in students){
    console.log(`${x} : ${students[x]}`)
}