var range = parseInt(prompt("Enter your range :"));

var i = 0;

while( i<= range){
    i++;
    if(i%2==1)continue;
    document.write(i + " ");
    if(i>20)break;
}