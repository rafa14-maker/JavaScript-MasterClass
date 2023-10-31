var myvar = document.querySelector("div");
var ins = document.createElement("h1");
var text = document.createTextNode("rafayet");
ins.appendChild(text);
myvar.appendChild(ins);

var ins1 = document.createElement("h1");
var text1 = document.createTextNode("rafayet");
ins1.appendChild(text1);

console.log(myvar);


var chi = myvar.children[1];

myvar.insertBefore(ins1,chi);

console.log(chi);

let btn = document.querySelectorAll('button');
let area = document.querySelector('.callfor');

console.log(area);

btn[0].addEventListener('click',function (e) {
    area.classList.remove('pi-2');
    area.classList.add('pi-1');
})

btn[1].addEventListener('click',function (e) {
    area.classList.remove('pi-1');
    area.classList.add('pi-2');
})

var myimg = document.querySelector('figure img');
console.log(myimg);

var arr = ['img/img1.jpg','img/img2.jpg','img/img3.jpg','img/img4.jpg','img/img5.jpg',];

var slider = document.querySelector(".slider");

console.log(slider);

var counter = 0;

slider.querySelectorAll('button')[0].addEventListener('click', function (e) {
    counter++;
    if(counter >= arr.length)counter = 0;
        myimg.src = arr[counter];
});

slider.querySelectorAll('button')[1].addEventListener('click', function (e) {
    counter--;
    if(counter < 0)counter = arr.length -1;
        myimg.src = arr[counter];
});

var mydrag = document.querySelector(".drag");

mydrag.querySelector('p').addEventListener('dragstart',function(e){
    e.dataTransfer.setData('text',e.target.id);
       console.log('drag start');
});

mydrag.addEventListener('dragover',function(e){
    e.preventDefault();
});

mydrag.querySelector('textarea').addEventListener('drop',function(e){
    let id = e.dataTransfer.getData('text');
    mydrag.querySelector('textarea').innerHTML = mydrag.querySelector('#'+id).innerHTML;
    console.log('drag end');
});




// before.insertBefore(chi,ins);
