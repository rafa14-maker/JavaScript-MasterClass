document.querySelector('button').addEventListener('click',function () {
    let num = document.querySelector('input').value;
   // console.log(num);\

   try{
          if(num < 5)throw "input is low";
          else if(num > 10)throw "input is high";
   }catch(err){
    console.log(err);
    return;
   }

   console.log('ok');
})