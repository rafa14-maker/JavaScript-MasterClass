// finding element 

const form = document.querySelector('form');
const cardBody = document.querySelector('.card-body');
const guessingNumber = form.querySelector('#guessingNumber');
const checkButton = form.querySelector('#check');
const resultText = form.querySelector('.resultText');
const remainingAttempts = cardBody.querySelector('.remainingAttempts');
const lostWinMessage = document.createElement('p');
const btn = form.querySelector('button');

// initialize attempts

let totalAttempts = 5;
let attempts = 0;
let won = 0;
let lost = 0;


form.addEventListener('submit',function(event){

    event.preventDefault();
    var ranNumber =  getRandomNumber(5);

   if(checkResult(parseInt(guessingNumber.value) , ranNumber)){
       resultText.innerHTML = `Nice Work !! You have Guessed it` ;
       attemptsMod(1);
   }
   else{
       resultText.innerHTML = `you have lost. Random Number was ${ranNumber}`;
       attemptsMod(0);
   }

    if(attempts >= 6){
         btn.remove();
    }
  
    // guessingNumber.value = "";
})

function checkResult(guessingNumber , limit){
        if(guessingNumber === limit)return true;
        else return false;
}

function getRandomNumber(limit){
      let ranNumber = Math.floor(Math.random() * limit)+1;
      return ranNumber;
}

function attemptsMod(res){
    if(res){
         won++;
         totalAttempts--;
         attempts++;
    }else{
      lost++;
      totalAttempts--;
      attempts++;
    }

    lostWinMessage.innerHTML = `Won : ${won} And Lost : ${lost}`;
    lostWinMessage.classList.add('large-text');
    // console.log(lostWinMessage);
    form.appendChild(lostWinMessage);
}
