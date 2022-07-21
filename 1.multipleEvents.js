// Add events on multiple elements

// const firstButton = document.querySelector('.one');
// firstButton.addEventListener('click', function(){
//     console.log('you clicked me !!!')
// })

// add click on all (three) button at a time
const allButton = document.querySelectorAll('.my-button button');
// console.log(allButton);
// for(let btn of allButton){
//     btn.addEventListener('click',function(){
//         console.log('you clicked me !!!');
//         console.log(this);
//     })
// }

// for of Loop
// for(let btn of allButton){
//     btn.addEventListener('click',function(){
//         console.log(this.textContent);          // just show the text on which we clicked 
//     })
// }

// for(let btn of allButton){
//     btn.addEventListener('click', ()=>{       // arrow function give undefined value
//         console.log(this.textContent);         
//     })
// }

// Simple Loop
// for(let i=0; i<allButton.length; i++){
//     allButton[i].addEventListener('click',function(){
//         console.log(this.textContent);          // just show the text on which we clicked 
//     })
// }


// forEach Loop
allButton.forEach(function(button){
    button.addEventListener('click', function(){
            console.log(this.textContent);
        });
});
