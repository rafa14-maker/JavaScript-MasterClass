const promise1 = new Promise((resolve,reject)=>{
    let completedpromise = true;
    if(completedpromise)resolve("ok");
    else reject("Not ok");
})

promise1.then((res)=>{
    console.log(res);
})