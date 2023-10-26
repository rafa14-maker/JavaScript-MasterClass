var num1 = parseInt(prompt("Enter Starting number :"));
var num2 = parseInt(prompt("Enter ending number :"));
var num3 = parseInt(prompt("Enter increment between numbers :"));

document.write("The Numbers are : <br>");

for(var i = num1, j=1 ;i <= num2 ;i += num3 , j++){
    document.write("The " + j + " Number is : "+i +"<br>"); 
}