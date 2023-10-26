var range = parseInt(prompt("Enter your range :"));

var mul = 1, i =1;

do{
    mul *= i;
    i++;
}while(i<=range)

document.write(mul);