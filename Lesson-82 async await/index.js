console.log('hi');

const taskOne = () =>{
    return new Promise((resolve,reject)=>{
        reject('task1 is not complete')
    });
}

const taskTwo = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('task2 is complete')
        },2000)
    });
}


const taskThree = () =>{
    return new Promise((resolve,reject)=>{
        resolve('task3 is complete')
    });
}

const taskFour = () =>{
    return new Promise((resolve,reject)=>{
        resolve('task4 is complete')
    });
}

// taskOne()
// .then(res => console.log(res))
// .then(taskTwo)
// .then(res => console.log(res))
// .then(taskThree)
// .then(res => console.log(res))
// .then(taskFour)
// .then(res => console.log(res))
// .catch(err => console.log(err));

const callAllTasks = async() =>{
    try{
   const t1 = await taskOne();
   console.log(t1);
   const t2 = await taskTwo();
   console.log(t2);
   const t3 = await taskThree();
   console.log(t3);
   const t4 = await taskFour();
   console.log(t4);
    }catch(e){
        console.log(e);
    }
}

callAllTasks();







