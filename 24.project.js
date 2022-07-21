// Create Project using event delegation

const todoFrom = document.querySelector('.form-todo');
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector('.todo-list');

todoFrom.addEventListener('submit',(e)=>{
    e.preventDefault();    // page don't refresh
    // console.log('submit event');
    // console.log(todoInput.value);
    const newtodoText = todoInput.value;
    const newli = document.createElement('li');          
    const newliInnerHtml = `<span class="text">${newtodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn">Done</button>
            <button class="todo-btn">Remove</button>
        </div>`;
    newli.innerHTML = newliInnerHtml;
    todoList.append(newli);
    todoInput.value = '';           // value clear after submit the value
});

// todoList.addEventListener('click',(e)=>{
//     // console.log(e.target);
//     // check if user click on 'Done' button
//     // console.log(e.target.classList);
//     if(e.target.classList.contains('Done')){
//         console.log('Great !!!');
//     }
//     if(e.target.classList.contains('Remove')){
//         console.log('you want to remove something');
//     }
// });


todoList.addEventListener('click',(e)=>{
    if(e.target.classList.contains('Done')){
        const liSpain = e.target.parentNode.previousElementSibling;
        // console.log(liSpain);
        liSpain.style.textDecoration = 'Line-through';
    }
    if(e.target.classList.contains('Remove')){
        const targetLi = e.target.parentNode.parentNode;
        // console.log(target);
        targetLi.remove();
    }
});

