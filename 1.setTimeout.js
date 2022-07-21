// Is Javascript a synchronous or asynchronous programming language?
// SetTimeout()
// SetTimeout() with 0 millisecond
// Callback Queue

// Synchronous and Asynchronous Programming

// Synchronous Programming: step by step execution of program

// console.log('script start');
// for(let i=0; i<1000; i++){
//     console.log('inside loop');
// }
// console.log('script end');

// Aynchronous Programming: execution of program according to set time

// console.log('script start');
// function hello(){
//     console.log('hello World');
// }
// setTimeout(hello, 1000);         // it is browser property
// console.log('script end');

// console.log('script start');
// setTimeout(()=>{                             // its take time (1s) then show at the end
//     console.log('inside the setTimeout');
// }, 1000);
// console.log('script end');


// console.log('script start');
// setTimeout(()=>{                             // its take time (0ms), but show at the end
//     console.log('inside the setTimeout');
// }, 0);
// for(let i=0; i<100; i++){
//     console.log('......');
// }
// console.log('script end');


// console.log('script start');
// const id = setTimeout(()=>{                 // it give id to browser
//     console.log('inside the setTimeout');
// }, 0);
// for(let i=0; i<100; i++){
//     console.log('......');
// }
// console.log('setTimeout id is:', id);
// console.log('script end');


console.log('script start');
const id = setTimeout(()=>{                           
    console.log('inside the setTimeout');
}, 0);
for(let i=0; i<100; i++){
    console.log('......');
}
console.log('setTimeout id is:', id);
console.log('clear Time out');
clearTimeout(id);
console.log('script end');
