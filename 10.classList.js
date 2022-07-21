// Class List
// add, remove, toggle classes

// to see how many classes in todo-section
const sectionTodo = document.querySelector('.todo-section');
console.log(sectionTodo);
console.log(sectionTodo.classList);

// to add class
// sectionTodo.classList.add('bg-dark');
// console.log(sectionTodo.classList);

// to remove class
// sectionTodo.classList.remove('container')
// console.log(sectionTodo.classList);

// to see the existence of class
const ans = sectionTodo.classList.contains('container')
console.log(ans);

// toggle: if class is present, remove it otherwise add
sectionTodo.classList.toggle('bg-dark')     // add class
console.log(sectionTodo.classList);
sectionTodo.classList.toggle('bg-dark')     // remove class
console.log(sectionTodo.classList);

// Another example
const header = document.querySelector('.header');
console.log(header.classList);
header.classList.add('bg-dark');  // add class, if 'bg-dark' class is above header class in CSS, then has no effect


