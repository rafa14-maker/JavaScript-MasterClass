console.clear();

console.log(window);
console.log(window.document);

//Location
console.log(location);

// href
console.log(location.href);

//protocol
console.log(location.protocol);

//hostname
console.log(location.hostname);

//port
console.log(location.port);

//pathname
console.log(location.pathname);

let myvar = document.querySelector(".div-p");

let first = myvar.children[0];
first.textContent = location.href;

first = myvar.children[1];
first.textContent = location.protocol;

first = myvar.children[2];
first.textContent = location.hostname;

myvar.querySelector("#visit").addEventListener('click',function(){
       location.assign("https://codeforces.com/");
});