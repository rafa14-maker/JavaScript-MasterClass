
const data = () =>{
    console.log('2');
}

const taskOne = () =>{
 console.log("1");
}

const taskTwo = () =>{
    setTimeout(() => {
        data();
    }, 2000);
   }

   const taskThree = () =>{
    console.log("3");
   }

   const taskFour = () =>{
    console.log("4");
   }

   const taskFive = () =>{
    console.log("5");
   }

taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();