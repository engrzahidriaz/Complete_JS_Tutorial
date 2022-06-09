// More about Prototype
// More discussion about proto and prototype

let numbers = [1,2,3,4];
console.log(numbers);

// numbers.method   // JS has many methods, extract from prototype

// prototype use only for function
// Internaly JS create array using array constractor (function) as below
let numbers1 = new Array(1,2,3,4)
console.log(numbers1);

//prototype of Function 'Array(1,2,3,4)' has all methods of array
console.log(Array.prototype);   // prototype of Array() Function

// to get all prototype of numbers (Array)
console.log(Object.getPrototypeOf(numbers1));  // all methods are in array form


function hello(){
    console.log('hello word')
}
// in JS, each function has properties called prototype
console.log(hello.prototype);  // prototype is in object form

// to change the prototype
hello.prototype = [];
console.log(hello.prototype);  // array form
hello.prototype.push('1');
console.log(hello.prototype);   
