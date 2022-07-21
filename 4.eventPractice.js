// Practice with events 

// task: button color and background change when click on button

const allButtons = document.querySelectorAll('.my-button button');
// console.log(allButtons);
// console.log(allButtons.length);

allButtons.forEach(button => {
    button.addEventListener('click', (e)=>{
        // console.log(e.target);
        e.target.style.backgroundColor = 'yellow';
        e.target.style.color = '#333';
    });
});