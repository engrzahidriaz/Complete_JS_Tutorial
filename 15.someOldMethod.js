// More methods to add elements on page
// Some old Methods to support poor IE
// appendChild, insertBefore, replaceChild, removeChild


// const ul = document.querySelector('.todo-list');
// const li = document.createElement('li');
// li.textContent = 'New Todo';
// ul.appendChild(li);


// const ul = document.querySelector('.todo-list');
// const li = document.createElement('li');
// const refNode = document.querySelector('.first-todo')
// li.textContent = 'New Todo';
// ul.insertBefore(li, refNode);       // add before refNode


const ul = document.querySelector('.todo-list');
const li = document.createElement('li');
li.textContent = 'New Todo';
const refNode = document.querySelector('.first-todo')
ul.replaceChild(li, refNode);            // replace 'li' with 'refNode'
