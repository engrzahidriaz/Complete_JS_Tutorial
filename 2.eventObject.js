// Event Object

// const firstButton = document.querySelector('.one');
// firstButton.addEventListener('click', function(){
//     console.log(this);
// })

// JS engine --> execute line by line
// browser  --> JS engine + extra feactures (eg WebApi)

// when user perform event, browser perform two tasks
// 1. callback function given to JS engine
// 2. give information of event with callback function
// this information inform of object is called Event Object

// firstButton.addEventListener('click', function(event){
//     console.log(event);
// })

const allButton = document.querySelectorAll('.my-button button');
// for(let btn of allButton){
//     btn.addEventListener('click',function(e){
//         console.log(e);
//     })
// }

for(let btn of allButton){
    btn.addEventListener('click', e =>{
        console.log(e.currentTarget);
    });
}