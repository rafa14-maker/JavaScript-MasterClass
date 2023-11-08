// initialize 
const card = document.querySelector('.card');
const submitButton = document.querySelector('#submit');
const arr = ['name','email','password','number','gender','hobby','coffee'];

// action listeners 
console.clear();
load();

submitButton.addEventListener('click',(event)=>{
    event.preventDefault();
    for(let i=0;i<arr.length;i++)
    {
     if(i === 4 || i === 5){
        let checkboxes = document.querySelectorAll(findElementInputString(arr[i],":checked"));
        let check = convertToArray(checkboxes);
        validate(check,arr[i]);
      //  addlocalStorage(arr[i],check);
    } else if(i <= 3) {
         let check = card.querySelector(findElementInputString(arr[i],""));
         validate(check.value,arr[i]);
     //    addlocalStorage(arr[i],check);
    } else if(i==6) {
        let check = card.querySelector('select[name="coffee"]');
        validate(check.value,arr[i]);
      //  addlocalStorage(arr[i],check);
    }
}
})


// functions 

function  load(){

    for(let i = 0 ; i < arr.length ; i ++){

       const itemInput = card.querySelector(`input[name="${arr[i]}"]`);
      
       const StorageInput = localStorage.getItem(`${arr[i]}`);
    //   console.log(itemInput , StorageInput);

           if(arr[i] == 'hobby'){
            //    itemInput.value = JSON.parse(StorageInput);
           }else if(arr[i]=='coffee'){

            const select = document.querySelector('option');
            select.value = StorageInput;

           }else if(arr[i] == 'gender'){
               
               itemInput.value = JSON.parse(StorageInput);

           }else {
               itemInput.value = (StorageInput);
           }
       

    }

}

const addlocalStorage = (index,item) =>{
    if(index == 'hobby' || index =='gender'){
        localStorage.setItem(index,JSON.stringify(item));
    }else{
        localStorage.setItem(index,item.value);
    }
}

const errmessage = (name) => {
    let errElement = document.querySelector(`p[id=${name}]`);
    errElement.innerHTML = "*";
    errElement.classList.add('erp');


    setTimeout(() => {
        errElement.innerHTML = "";
    }, 2000);
}


const findElementInputString = (index,check) =>{
   return `input[name="${index}"]${check}`;
}

const validate = (element , name) =>{
     if(element == ""){
       errmessage(name);
     }
}

const convertToArray = (checkboxes) =>{
    let values = [];
    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

