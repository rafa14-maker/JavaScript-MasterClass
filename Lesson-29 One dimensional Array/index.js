
function high(arr){
      var pk = arr[0];
      for(var i=0;i<arr.length;i++)
      {
           if(pk<arr[i])pk = arr[i];
      }
      return pk;
}

var size = parseInt(prompt("Enter Array size : "));

var arr = new Array(size);

for( var i =0 ; i<size;i++){
    arr[i] = parseInt(prompt("Enter Array size : "));
}

document.write("The array is "+ arr +"<br>");

document.write("Highest element in the array :" + high(arr));