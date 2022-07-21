// 'This' keyword inside eventListener callback

const btn = document.querySelector('.btn-headline');
btn.addEventListener('click', function(){        // give value of button on task performed 
    console.log('you clicked me !!!')
    console.log('Value of this');
    console.log(this);
});

// btn.addEventListener('click', ()=>{     // give value of window, means one line above
//     console.log('you clicked me !!!')
//     console.log('Value of this');
//     console.log(this);
// });