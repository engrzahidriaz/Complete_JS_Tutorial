// compilation

// compilation phase:
// 1. tokenizaing / Lexing: code is divided in small parts
// 2. parsing: after understanding parts, AST is formed. parsing for 
// (a) early error checking and 
// (b) determining appropriate scope for variables e.g firstName belong to global variable in below example
// 3. code generation

// code execution 
// in j.s code execute in execution context
// why compilation

// how j.s works
// j.s is synchronising programming language, lines execute one by one means single thread

// what is global execution context //
// 1. creation phase
// 2. code execution phase


// closuers

console.log(this);
console.log(window);
console.log(firstName);    // undefined
console.log(myFunc);

function myFunc(){
    console.log('this is my function')
}
var firstName = 'zahid';
console.log(firstName);    // Ans: zahid

// Hoisting: before code executions, all variables are stored in global scope


// function declaration 
function myFunc(){
    console.log('this is my function')
}

// function expression  
var myFunc = function(){
    console.log('this is my function')
}


// in let ans const case:
console.log(firstName);    // ive error -> uninitialize
let firstName = 'zahid';


// what is local execution context //

// function execution context: for call function, create another execution context

let foo = 'foo';
console.log(foo);
function getfullname(fName, lName){
    console.log(arguments);
    let myVar = 'var inside function';
    console.log(myVar);
    const fullName = fName + ' ' + lName;
    return fullName;
}

const personName = getfullname('zahid', 'Riaz');
console.log(personName)

// Closures //

// function can return function

// function outerFunc(){
//     function innerFunc(){
//         console.log('Hello Word');
//     }
//     return innerFunc;
// }
// const ans = outerFunc();
// ans();


function printFullName(fName, lName){
    function printName(){
        console.log(fName, lName);
    }
    return printName;   // function return with its all parameters
}
const ans = printFullName('Zahid', 'Riaz');
ans();


// function myFunc(power){
//     return function(number){
//         return number ** power
//     }
// }

// above code can written as
const myFunc = power => number => number ** power

const square = myFunc(2);
const ans1 = square(3);
console.log(ans1);
