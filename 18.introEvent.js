// Intro to Events
// Event: click on button and perform some task

// types to add event
// 1. write onclick="console.log('you clicked me')" in button in html file.

// 2. select the button with class onwhich task has been perform
// const btn = document.querySelector('.btn-headline');
// console.log(btn);
// btn.onclick = function(){                // asign as function to onclick property
//     console.log('you clicked me !!!')
// }

// 3. add Method 'addEventListener' which take two inputs, event and function
const btn = document.querySelector('.btn-headline');
btn.addEventListener('click', function(){
    console.log('you clicked me !!!')
});


