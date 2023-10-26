// IIFEs ( Immediately Invokeable Function Expressions)

(function display(){
    console.log("Hello");
})();

//Function Expression 
// () , {} , [] , <>

var num1 = parseInt(prompt("Enter First Number :"));
var num2 = parseInt(prompt("Enter Second Number :"));

(function sum(){
  var result = num1 + num2;
  console.log(result);
})(num1,num2);