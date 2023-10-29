const textarea = document.querySelector('textarea');

textarea.addEventListener('keydown',function(){
    console.log('keydown');
})

textarea.addEventListener('keypress',function(){
    console.log('keypress');
})

textarea.addEventListener('keyup',function(e){
    console.log('keyup  ' + e.key);
    console.log('keyup  ' + e.shiftKey);
    console.log('keyup  ' + e.ctrlKey);
    // console.log('keyup  ' + e.shiftKey);
})