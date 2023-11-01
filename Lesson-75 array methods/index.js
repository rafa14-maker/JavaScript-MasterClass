 let numbers = [5,55,14,5,78];

 const evenNumber = (value,index,array) =>{
       if(value%2===0)return value;
 }

 let firstEventNumber = numbers.find(evenNumber);
 let firstEventNumberIndex = numbers.findIndex(evenNumber);

 console.log(firstEventNumber);
 console.log(firstEventNumberIndex);