console.clear();

const makeRequest = async(confiq) =>{
     return await axios(confiq);
}

const getData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res) => console.log(res))
    .catch((err)=> console.log(err));
}
getData();

const createData = () =>{
    makeRequest({
      url : 'https://jsonplaceholder.typicode.com/posts',
      method : 'post',
      data :     JSON.stringify({
             title: 'foo',
              body: 'bar',
              userId: 1,
      })
    })
    .then((res) => console.log(res))
    .catch((err)=> console.log(err));
}
createData();

const updateData = () =>{
    makeRequest({
      url : 'https://jsonplaceholder.typicode.com/posts/1',
      method : "put",
      data :     JSON.stringify({
             title: 'fooMaaaa',
              body: 'bar',
              userId: 1,
      })
    })
    .then((res) => console.log(res))
    .catch((err)=> console.log(err));
}
updateData();

const deleteData = () =>{
    makeRequest({
      url : 'https://jsonplaceholder.typicode.com/posts/1',
      method : "delete"
    })
    .then((res) => console.log(res))
    .catch((err)=> console.log(err));
}
deleteData();





// axios
// .get('https://jsonplaceholder.typicode.com/posts')
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err))


// axios
// .post('https://jsonplaceholder.typicode.com/posts',{
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
// })
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err))

// axios
// .put('https://jsonplaceholder.typicode.com/posts/1',{
//     body: JSON.stringify({
//       title: 'fooMa',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
// })
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err))

// axios
// .patch('https://jsonplaceholder.typicode.com/posts/1',{
//     body: JSON.stringify({
     
//       body: 'barmaaaaa',
      
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
// })
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err))

// axios
// .delete('https://jsonplaceholder.typicode.com/posts/1',{})
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err))



