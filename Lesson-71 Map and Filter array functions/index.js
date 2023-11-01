var numbers = [2,3,4,5]
var squareNumbers = []

numbers.forEach(function(x) {
    squareNumbers.push(x*x);
})

console.log(squareNumbers);

var squareNumbers2 = numbers.map(function(x) {
    return x*x; 
})

console.log(squareNumbers2);

var NewNumbers = numbers.filter(function(x) {
    return x>10;
})

console.log(NewNumbers);
