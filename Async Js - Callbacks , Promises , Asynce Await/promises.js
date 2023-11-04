const posts = [
    {title : 'Post One' , body : 'This is post one'},
    {title : 'Post Two' , body : 'This is post two'}
 ];
 
 function getPosts(){
     setTimeout(() => {
         let output = '';
         posts.forEach((post,index) =>{
               output += `<li>${post.title}</li>`;
         });
         document.body.innerHTML = output;
     },1000);
 }
 
 function createPost(post){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const err = false;

            if(!err)resolve();
            else reject('Something is wrong');

        },2000)
    });

 }
 
//  createPost({title : 'Post three', body:'This is the Post three'})
//  .then(getPosts)
//  .catch(err => console.log(err));


//Asynce / Await

// async function init(){
//    await createPost({title : 'Post three', body:'This is the Post three'});

//    getPosts();
// }

// init();

 // async / await / fetch

 async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
 }

 fetchUsers();

// const promise1 = Promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(resolve, 2000,'goodbye')
// })

// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json());

// Promise.all([promise1,promise2,promise3,promise4]).then((values)=>console.log(values));