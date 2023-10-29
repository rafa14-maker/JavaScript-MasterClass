const input = document.querySelector("input");

input.addEventListener('blur',function () {
    console.log("blur");
})

input.addEventListener('focus',function () {
    console.log("focus");
    input.style.backgroundColor = 'tomato';
})

input.addEventListener('focusin',function () {
    console.log("focusin");
})

input.addEventListener('focusout',function () {
    console.log("focusout");
    input.style.backgroundColor = 'blue';
})