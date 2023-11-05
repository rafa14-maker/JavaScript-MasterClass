// localStroage stores data as key value pair - string

// setItem(key , value)

// console.log(localStorage);
// localStorage.setItem("userName" , "rafayet");
// localStorage.setItem("password" , "rafayet");


//getItem(key)

// const usrename = localStorage.getItem('userName');
// const usrPassword = localStorage.getItem('password');

// console.log(usrPassword , usrename);

//updateItem all same just change the value inside.

//removeItem(key)

// localStorage.removeItem('userName');
// localStorage.removeItem('password');


// const countries = ['bangladesh', 'india','nepal'];

// localStorage.setItem("countries" , JSON.stringify(countries));
// localStorage.setItem("password" , "rafayet");

// const count = JSON.parse(localStorage.getItem('countries'));

// console.log(count);

//localStorage vs sessionStroage
//10mb vs 5mb
//permanent vs session(tab)

// sessionStorage.clear();

// sessionStorage.setItem('user','rafayet');
// const usr = sessionStorage.getItem('user');

// console.log(usr);


document.cookie = 'username=rafayet;expires=Mon,21 Feb 2024';