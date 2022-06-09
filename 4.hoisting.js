// Hoisting
// you can call function before function declaration
// but you can't do in function expression and arrow function case


hello();
function hello(){
    console.log('Hello function');
}

// hello1();
// const hello1 = function(){
//     console.log('Hello function');
// }

// you can show variable (undefined) before value declaration in var case only
// but you can't do in const and let case

console.log(hello2);
var hello2 = 'Hello Function';

// console.log(hello3);
// const hello3 = 'Hello Function';