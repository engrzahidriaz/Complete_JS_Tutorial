// Callbacks in asynchronous programming 
// Callbacks, Callback Hell and Pyramid of doom

// const heading1 = document.querySelector('.heading1');
// const heading2 = document.querySelector('.heading2');
// text and color change after given interval
// setTimeout(() => {
//     heading1.textContent = 'Heading-01';
//     heading1.style.color = 'violet'; 
// }, 4000);
// setTimeout(() => {
//     heading2.textContent = 'Heading-02';
//     heading2.style.color = 'purple'; 
// }, 3000);


// NOTE: order of tasks is compulsary in any programming 
// setTimeout(() => {
//     heading1.textContent = 'Heading-01';
//     heading1.style.color = 'violet'; 
//     setTimeout(() => {
//         heading2.textContent = 'Heading-02';
//         heading2.style.color = 'purple'; 
//     }, 1000);
// }, 1000);
    

const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading6');
const heading7 = document.querySelector('.heading7');

// CallBacks hell

// setTimeout(() => {
//     heading1.textContent = 'Heading-01';
//     heading1.style.color = 'violet'; 
//     setTimeout(() => {
//         heading2.textContent = 'Heading-02';
//         heading2.style.color = 'purple'; 
//         setTimeout(() => {
//             heading3.textContent = 'Heading-03';
//             heading3.style.color = 'red'; 
//             setTimeout(() => {
//                 heading4.textContent = 'Heading-04';
//                 heading4.style.color = 'green'; 
//                 setTimeout(() => {
//                     heading5.textContent = 'Heading-05';
//                     heading5.style.color = 'yellow'; 
//                     setTimeout(() => {
//                         heading6.textContent = 'Heading-06';
//                         heading6.style.color = 'blue';
//                         setTimeout(() => {
//                             heading7.textContent = 'Heading-07';
//                             heading7.style.color = 'brown'; 
//                         }, 1000); 
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


// function changeText(element, text, color, time){
//     setTimeout(() => {
//         element.textContent = text;
//         element.style.color = color;
//     }, time);
// }
//  changeText(heading1, 'heading-01','violet', 2000);


// function changeText(element, text, color, time){
//     setTimeout(() => {
//         if(element){
//             element.textContent = text;
//             element.style.color = color;
//         }else{
//             console.log('Element not exit !!!')
//         }
//     }, time);
// }
//  changeText(heading1, 'heading-01','violet', 2000);


// function changeText(element, text, color, time, onSuccessCallBacks){
//     setTimeout(() => {
//         if(element){
//             element.textContent = text;
//             element.style.color = color;
//             if(onSuccessCallBacks){
//                 onSuccessCallBacks();
//             }
//         }else{
//             console.log('Element not exit !!!')
//         }
//     }, time);
// }
// changeText(heading1, 'heading-01','violet', 3000, ()=>{
//     changeText(heading2, 'heading-02','purple', 2000)
// });

// Pyramid of doom

function changeText(element, text, color, time, onSuccessCallBacks, onFailureCallBacks){
    setTimeout(() => {
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onSuccessCallBacks){
                onSuccessCallBacks();
            }
        }else{
            if(onFailureCallBacks){
              onFailureCallBacks();
            }
        }
    }, time);
}
changeText(heading1, 'heading-01','violet', 2000, ()=>{
    changeText(heading2, 'heading-02','purple', 2000, ()=>{
        changeText(heading3, 'heading-03','red', 2000, ()=>{
            changeText(heading4, 'heading-04','green', 2000, ()=>{
                changeText(heading5, 'heading-05','yellow', 2000, ()=>{
                    changeText(heading6, 'heading-06','blue', 2000, ()=>{
                        changeText(heading7, 'heading-07','brown', 2000, ()=>{
    
                        },()=>{console.log('heading-07 not exit !!!')});
                    },()=>{console.log('heading-06 not exit !!!')});
                },()=>{console.log('heading-05 not exit !!!')});
            },()=>{console.log('heading-04 not exit !!!')});
        },()=>{console.log('heading-03 not exit !!!')});
    },()=>{console.log('heading-02 not exit !!!')});
},()=>{console.log('heading-01 not exit !!!')});

