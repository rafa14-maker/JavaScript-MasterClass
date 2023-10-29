console.clear();

document.querySelector("input").addEventListener("change",function(e){
    // console.log(e.type);
    console.log(e.target);
    console.log(e.target.value);
})


var programs = document.querySelectorAll("input[name=program");

console.log(programs);

for(var i =0 ; i<programs.length ;i++){
    programs[i].addEventListener("change",function(e){
      if(e.target.checked)  console.log(e.target.value);
    })
}

var depart = document.querySelectorAll("#department");
// console.log(department);

for(var i = 0;i<depart.length ;i++){
    depart[i].addEventListener('change',function(e) {
        console.log(e.target.value);
    })
}