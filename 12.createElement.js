// Create Elements
// append, prepend, remove, before, after

// const newTodoItem = document.createElement('li');     // Create 'li' element
// const newTodoItemText = document.createTextNode('Teach Students');  // Create text of element
// newTodoItem.textContent = 'Teach Students';          // same as above line
// const todoList = document.querySelector('.todo-list');
// newTodoItem.append(newTodoItemText);                // add text in 'li' element at last
// todoList.append(newTodoItem);
// console.log(newTodoItem);

// prepend:
// todoList.prepend(newTodoItem);        // add text in 'li' element in first
// console.log(newTodoItem);

// remove:
// const todo1 = document.querySelector('.todo-list li')
// todo1.remove();
// console.log(todo1);

// before, after
const newTodoItem = document.createElement('li');     
newTodoItem.textContent = 'Teach Students';          
const todoList = document.querySelector('.todo-list');
// todoList.before(newTodoItem);                // add element 'li' before 'ul'
todoList.after(newTodoItem);                // add element 'li' after 'ul'


