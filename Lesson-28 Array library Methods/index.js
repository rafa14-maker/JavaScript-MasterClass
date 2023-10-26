var names = ['fahim', 'Hossain' , 'Rafayet'];
console.log(names);

//shift opposite of pop

names.shift();
console.log(names);

// unshift opposite of push

names.unshift('Hello');
console.log(names);

names.splice(2,0,'karim','rahim');
console.log(names);

var newArray = names.slice(1);
console.log(newArray);

var sortedNames = names.sort();
names.reverse();
console.log(names);