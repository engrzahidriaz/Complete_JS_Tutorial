// Static list and Live list 

// querySelectorAll provide static list
// getelementBysonthing provide live lit

// const listItem = document.querySelectorAll('.todo-list li');
// const sixLi = document.createElement('li');     // add item 6
// sixLi.textContent = 'item 6';
// const ul = document.querySelector('.todo-list');
// ul.append(sixLi);
// console.log(listItem);   // element are six, but nodelist are 5


const ul = document.querySelector('.todo-list');
const listItems = ul.getElementsByTagName('li');
const sixLi = document.createElement('li');     // add item 6
sixLi.textContent = 'item 6';

ul.append(sixLi);
console.log(listItems);   // element are six, but nodelist are also six

