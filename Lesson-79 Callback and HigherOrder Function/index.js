// const square = (x) =>{
//     console.log(`square of ${x} = ${ x * x}`)
// }

// const higherOrder = (x, callback) =>{
//     callback(x);
// }

// higherOrder(5,square);

// //callback and higher order function:
 
// function square (x){
//     console.log(`square of ${x}: ${x*x}`)
// }
// //const y = square;
// //y(5)

// function higherOrderFunction(num, callback){
//     callback(num);
// }
// higherOrderFunction(6,square)





//synchronous programming
const taskOne = (callback) =>{
    console.log('task1');
    callback()
}

//asynchronous programming:
const taskTwo = (callback) =>{
    setTimeout(() => {
        console.log('task2,data loading');
        callback()
    },3000)
}


//synchronous programming

const taskThree = (callback) =>{
    console.log('task3');
    callback();
}

//synchronous programming
const taskFour = (callback) =>{
    console.log('task4');
    callback();
}

//synchronous programming
const taskFive = () =>{
    console.log('task5');
}


taskOne(() =>{
    taskTwo(() =>{
        taskThree(() =>{
            taskFour(() =>{
                taskFive();
            });
        });
    });
});



//asynchronous program er example,jotokon na click kora hobe toton asynchronous ortath callback kaj korbe na 
console.log('hi')
document.querySelector("button").addEventListener('click',()=>{
    console.log('button is clicked')
})
console.log('bye');