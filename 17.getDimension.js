// How to get the dimensions of the element

// to find height and width of section of class 'todo-section'
const sectionTodo = document.querySelector('.todo-section');
const infoSection = sectionTodo.getBoundingClientRect();
console.log(infoSection);
