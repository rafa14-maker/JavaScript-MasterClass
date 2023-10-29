const video = document.querySelector("video");

video.addEventListener('canplay',function(e) {
    console.log("canplay");
});

video.addEventListener('play',function(e) {
    console.log("play");
});

video.addEventListener('pause',function(e) {
    console.log("pause");
});

video.addEventListener('playing',function(e) {
    console.log("playing");
});

video.addEventListener('ended',function(e) {
    console.log("Thanks For Watching");
});
