

var count = 0;

document.querySelector("textarea").addEventListener("keypress",function() {
    count++;
    document.querySelector("p").innerHTML = count;
})


// document.addEventListener("keypress",function (event) {
//    var text = event.key;
//    document.querySelector("p").innerHTML = "hello" + text;
// });