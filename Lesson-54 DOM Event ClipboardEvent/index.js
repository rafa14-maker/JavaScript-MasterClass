const input = document.querySelector('input');

input.addEventListener('copy',function() {
    console.log('copy');
})

input.addEventListener('cut',function() {
    console.log('cut');
})

input.addEventListener('paste',function() {
    console.log('paste');
})