// const posts = [
//     {
//         title : "this is title1",
//         body : "this is body"
//     } ,
//     {
//         title : "this is title2",
//         body : "this is body"
//     },
//     {
//         title : "this is title3",
//         body : "this is body"
//     },
//     {
//         title : "this is title4",
//         body : "this is body"
//     },
//     {
//         title : "this is title5",
//         body : "this is body"
//     },
//     {
//         title : "this is title6",
//         body : "this is body"
//     },
//     {
//         title : "this is title7",
//         body : "this is body"
//     },
// ]

//fetch data

// console.log(axios);

const fetchdata = async (confiq) => {
    try{
    const res = await axios(confiq);
   // console.log(res.data);
    return res.data;
    }catch(err){
                throw Error("data not fetch");
    }
}

// fetchdata('https://jsonplaceholder.typicode.com/posts');

// selection 

const postsElement = document.querySelector('.posts');

const loadAlldata = async () =>{
 const posts = await fetchdata('https://jsonplaceholder.typicode.com/posts');
    posts.map(post =>{
        console.log(post);

        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
        <h4 class="post-title">${post.title}</h4>
        <p class="post-body">
           ${post.body}
        </p>
        `;
        postsElement.appendChild(postElement);
    })
}


loadAlldata();