// document.querySelector(".btn-1").addEventListener("click",function() {
//          var text  = this.innerHTML;
//          console.log(text);    
// })


var mycar = document.querySelectorAll("button");

for(var i=0 ;i < mycar.length ;i++){
    mycar[i].addEventListener("click",function() {
        var text = this.innerHTML;
        // console.log(text);

        if(text == 'a'){
                 var audio = new Audio("audio/a.mp3");
                 audio.play();
        }
        else if(text == 'b'){
            var audio = new Audio("audio/b.mp3");
            audio.play();
        }
        else
        {
            var audio = new Audio("audio/c.mp3");
            audio.play();
        }
    })
}