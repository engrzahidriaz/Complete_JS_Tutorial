// keypress Event: press any button on body of webpage
// mouseover Event: as mouse reach over button, event occur

// const body = document.body;
// body.addEventListener('keypress',(e)=>{
//     // console.log(e);
//     console.log(e.key);   // show key that we press
// });


const mainButton = document.querySelector('.btn-headline');
mainButton.addEventListener('mouseover',()=>{
    console.log('mouseover Event Occured !!!');  
});
mainButton.addEventListener('mouseleave',()=>{
    console.log('mouseleave Event Occured !!!');  
});