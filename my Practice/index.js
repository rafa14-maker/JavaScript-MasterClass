console.log(window);

// document.querySelector('button').addEventListener('click',function() {
//     location.assign("https://classroom.google.com/c/NjM1OTcwNjUzMDQx")
// })

// let counter = 0;

// const yo = setInterval(() => {
//     counter++;
//     console.log('pop up');
//     if(counter>3)clearInterval(yo);
// }, 2000);

// console.log("hello");

let p = document.createElement('p');
document.body.append(p);

function less(a){
    if(a < 10)return '0'+a;
    else return a;
}

function koko(){
    let date = new Date();
    // console.log(date);
    let min = date.getMinutes();
    min = less(min);
    let hour = date.getHours();
    hour = less(hour);
    let sec = date.getSeconds();
    sec = less(sec);
    let text = hour + ':' + min + ':' +sec;
    p.innerHTML = text;
}

document.querySelector('button').addEventListener('click',function () {
        setInterval(() => {
            koko();
        }, 1000);    
})



let arr = [10,20,30,50,60,70];

let [num1,num2,num3,...num4] = arr;

[num3,num4] = [num4,num3];

console.log(num4);

















// var myvar = document.querySelector("div");
// var ins = document.createElement("h1");
// var text = document.createTextNode("rafayet");
// ins.appendChild(text);
// myvar.appendChild(ins);

// var ins1 = document.createElement("h1");
// var text1 = document.createTextNode("rafayet");
// ins1.appendChild(text1);

// console.log(myvar);


// var chi = myvar.children[1];

// myvar.insertBefore(ins1,chi);

// console.log(chi);

// let btn = document.querySelectorAll('button');
// let area = document.querySelector('.callfor');

// console.log(area);

// btn[0].addEventListener('click',function (e) {
//     area.classList.remove('pi-2');
//     area.classList.add('pi-1');
// })

// btn[1].addEventListener('click',function (e) {
//     area.classList.remove('pi-1');
//     area.classList.add('pi-2');
// })

// var myimg = document.querySelector('figure img');
// console.log(myimg);

// var arr = ['img/img1.jpg','img/img2.jpg','img/img3.jpg','img/img4.jpg','img/img5.jpg',];

// var slider = document.querySelector(".slider");

// console.log(slider);

// var counter = 0;

// slider.querySelectorAll('button')[0].addEventListener('click', function (e) {
//     counter++;
//     if(counter >= arr.length)counter = 0;
//         myimg.src = arr[counter];
// });

// slider.querySelectorAll('button')[1].addEventListener('click', function (e) {
//     counter--;
//     if(counter < 0)counter = arr.length -1;
//         myimg.src = arr[counter];
// });

// var mydrag = document.querySelector(".drag");

// mydrag.querySelector('p').addEventListener('dragstart',function(e){
//     e.dataTransfer.setData('text',e.target.id);
//        console.log('drag start');
// });

// mydrag.addEventListener('dragover',function(e){
//     e.preventDefault();
// });

// mydrag.querySelector('textarea').addEventListener('drop',function(e){
//     let id = e.dataTransfer.getData('text');
//     mydrag.querySelector('textarea').innerHTML = mydrag.querySelector('#'+id).innerHTML;
//     console.log('drag end');
// });




// // before.insertBefore(chi,ins);
