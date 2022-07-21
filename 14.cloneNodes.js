// Clone Nodes   --> copy the node

// const ul = document.querySelector('.todo-list');
// const li = document.createElement('li');
// li.textContent = 'New Node';
// ul.append(li);
// ul.prepend(li);


const ul = document.querySelector('.todo-list');
const li = document.createElement('li');
li.textContent = 'New Node';
const li2 = li.cloneNode(true);       // 'li2' is copy of 'li'
ul.append(li);
ul.prepend(li2);
