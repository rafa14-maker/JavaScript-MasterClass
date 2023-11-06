const container = document.querySelector(".container");
const todoForm = container.querySelector(".todo-form");
const todoInput = container.querySelector("#inputTodo");
const TodoAddButton = container.querySelector("#addTodoButton");
const todoList = container.querySelector("#lists");
const messageElement = container.querySelector("#message");

//createTodo

const createTodo = (todoId,todoValue) => {
    console.log(todoValue);
    const todoElement = document.createElement('li');
    todoElement.id = todoId;
    todoElement.classList.add('li-style');
    todoElement.innerHTML = `<span> ${todoValue}</span> <span>
    <button class="btn" id="deleteButton"><i class="fa fa-trash"></i></button></span`;
    todoList.appendChild(todoElement);

    const deleteButton = todoElement.querySelector('#deleteButton');
    deleteButton.addEventListener("click",(event)=>{
          deleteTodo(todoElement);
    });
}


//delete Todo

const deleteTodo = (e) => {
    const selectedTodo = e;
    let todos = getTodoFromLocalStroage();
    todos = todos.filter((todo)=>todo.todoId != selectedTodo.id);
    localStorage.setItem('mytodos',JSON.stringify(todos));
    // console.log(selectedTodo);
    todoList.removeChild(selectedTodo);
    showMessage("todo is deleted","det");
}

//Show message

const showMessage = (text,statues) => {
    messageElement.textContent = text;
    messageElement.classList.add(`bg-${statues}`);

    setTimeout(()=>{
        messageElement.textContent = "";
        messageElement.classList.remove(`bg-${statues}`);
    },2000)
}

// get todos from local Stroage

const  getTodoFromLocalStroage = () =>{

 return localStorage.getItem("mytodos") ? JSON.parse(localStorage.getItem("mytodos")):[];

}


// add TodoFunction

const addTodo = (event) => {
    event.preventDefault();
    const todoValue = todoInput.value;
   
    // unique id 
    const todoId = Date.now().toString();
    // console.log(todoId);
    createTodo(todoId , todoValue);
    showMessage("todo is add","suc");

    //todo to local storage

    const todos = getTodoFromLocalStroage();

    todos.push({todoId,todoValue});

    localStorage.setItem("mytodos",JSON.stringify(todos));

    todoInput.value = "";

}

//load todos

const loadTodos = () =>{
    const todos = getTodoFromLocalStroage();
    // console.log(todos);
   todos.map((todo) => createTodo(todo.todoId,todo.todoValue));

}


// adding listener 
todoForm.addEventListener('submit',addTodo);
window.addEventListener('DOMContentLoaded',loadTodos);