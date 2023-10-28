var arr = ['img/img1.jpg','img/img2.jpg','img/img3.jpg','img/img4.jpg','img/img5.jpg' ];
var imgtag = document.querySelectorAll("img")[0];

var count = 0;

function next(){
    count ++;
    if(count >= arr.length)count = 0;
    imgtag.src = arr[count];
}

function prev(){
    count--;
    if(count < 0)count = arr.length -1;
    imgtag.src = arr[count];
}