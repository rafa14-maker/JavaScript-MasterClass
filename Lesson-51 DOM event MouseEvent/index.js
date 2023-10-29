const div = document.querySelector('div');
console.clear();

div.addEventListener('click',function (e) {
    console.log("clicked");   
})

div.addEventListener('dbclick',function (e) {
    console.log("dbclicked");   
})

div.addEventListener('mousedown',function (e) {
    console.log("mousedown");   
})

div.addEventListener('mouseup',function (e) {
    console.log("mouseup");   
})

div.addEventListener('mouseenter',function (e) {
    console.log("mouseenter");   
})

div.addEventListener('mousemove',function (e) {
    console.log("mousemove = "+ e.clientX);   
})

div.addEventListener('mouseover',function (e) {
    console.log("mouseover");   
})

div.addEventListener('mouseover',function (e) {
    console.log("mouseover");   
})