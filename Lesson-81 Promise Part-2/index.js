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

taskOne()
.then(res => console.log(res))
.then(taskTwo)
.then(res => console.log(res))
.then(taskThree)
.then(res => console.log(res))
.then(taskFour)
.then(res => console.log(res))
.catch(err => console.log(err));







