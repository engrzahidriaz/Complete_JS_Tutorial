// Insert adjacent elements HTML
// beforebegin, afterbegin, beforeend, afterend


const todoList = document.querySelector('.todo-list');
todoList.insertAdjacentHTML('beforeend', '<li>Teach Students</li>');    // add beforeend of 'todo-list' class
// todoList.insertAdjacentHTML('afterbegin', '<li>Teach Students</li>');   // add afterbegin of 'todo-list' class
// todoList.insertAdjacentHTML('afterend', '<li>Teach Students</li>');     // add afterend of 'todo-list' class
// todoList.insertAdjacentHTML('beforebegin', '<li>Teach Students</li>');  // add beforebedin of 'todo-list' class