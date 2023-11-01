document.querySelector('button').addEventListener('click',clock());




function clock() {
    
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if(sec < 10){
        sec = '0' +sec;
    }

    if(hour < 10){
        hour = '0' + hour;
    }

    if(min < 10){
        min = '0' + min;
    }

    let text = hour + ":" + min + ":" + sec ; 

    document.querySelector('p').textContent = text;

    setInterval(clock,1000);

}