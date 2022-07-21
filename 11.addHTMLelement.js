// Add HTML Element using JS
// Add new elements to page

// to see innerHTML in 'todo-list'
const todoList = document.querySelector('.todo-list');
console.log(todoList.innerHTML);

// to change innerHTML
// todoList.innerHTML = '<li> changed todo-1 </li>'    // change whole innerHTML
// console.log(todoList.innerHTML);   

todoList.innerHTML = todoList.innerHTML + '<li> add new todo-1 </li>'    // add new innerHTML
todoList.innerHTML += '<li> add new todo-2 </li>'    // same as above
todoList.innerHTML += '<li> add new todo-3 </li>'   
console.log(todoList.innerHTML); 

// NOTE: we should not add by using innerHTML due to performance issue
// NOTE: we should add by using innerHTML to change whole innerHTML


