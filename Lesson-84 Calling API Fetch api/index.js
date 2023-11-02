console.clear();

// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method : 'POST',

//     headers : {
//               'content-type' : "application/json; charset=UTF-8",
//     },

//     body : JSON.stringify({
//         title : "foo",
//         body : "bar",
//         userId : 1 
//     }),
// })
// .then((res) => {
//     if(!res.ok){
//         const message = `Error : ${res.status}`
//         throw new Error();
//     }
//     return res.json();
// })
// .then((res => console.log(res)))
// .catch((err)=>console.log(err));


const makeRequest = async(url, confiq) =>{
   const res =  await fetch(url,confiq);
   if(!res.ok){
    const message = `Error : ${res.status}`;
    throw new Error(message);
   }
   const data = await res.json();
   return data;
}

const sendData = () =>{
    makeRequest('https://jsonplaceholder.typicode.com/posts' , {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
    }})
    .then((res) => console.log(res))
    .catch((err) =>console.log(err))
}

const updateData = () =>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1' , {
        method: 'PATCH',
        body: JSON.stringify({
            id : 1,
          title: 'fooma',
          body: 'barma',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
    }})
    .then((res) => console.log(res))
    .catch((err) =>console.log(err))
}

const deleteData = () =>{
    makeRequest('https://jsonplaceholder.typicode.com/posts/1' , {
        method: 'Delete',}
       )
    .then((res) => console.log(res))
    .catch((err) =>console.log(err))
}

const getData = () =>{
    makeRequest('https://jsonplaceholder.typicode.com/posts')
    .then((res) => console.log(res))
    .catch((err) =>console.log(err))
}

getData();
sendData();
updateData();
deleteData();


