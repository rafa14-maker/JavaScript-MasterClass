console.clear();

const makeRequest = async(url,method,data) =>{
   try{
    const result = await $.ajax({
        url : url,
        method : method,
        data : data
    })
    return result;
   }catch{
    console.log(err);
   }
}

const getData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts",'get')
    .then((res)=>console.log(res))
}

getData();

const createData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts",'post',{
        title: 'foo',
        body: 'bar',
        userId: 1,
    })
    .then((res)=>console.log(res))
}

createData();