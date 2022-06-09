// undefined, null, BigInt

// unfedined
let myName;
console.log(myName);
console.log(typeof myName, myName);

var newName;
console.log(newName);
console.log(typeof newName);

// const firstName;     // constant gives error
// console.log(firstName);

// null
let myName1 = null;
console.log(myName1);
console.log(typeof myName1);  
console.log(typeof null); // bug , error in JS

// BigInt  --> to define max number
let myNumber = 12;
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER)

let newNumber = 999999333399920292884382559;
console.log(newNumber);

let newNumber1 = BigInt(885);  // or write 885n
console.log(newNumber1);

