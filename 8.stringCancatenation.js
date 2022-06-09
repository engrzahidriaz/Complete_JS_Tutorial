// string concatenation
let string1 = 'Zahid'
let string2 = 'Riaz'

let string3 = string1 + string2;
console.log(string3);

let string4 = string1 + ' '+ string2;
console.log(string4);

let str1 = "10";
let str2 = "17";
let str3 = str1 + str2;
console.log(str3); 

let str4 = +str1 + +str2; // change string to numbers
console.log(str4); 
console.log(typeof str4);

// template string
let myName = "zahid";
let age = 32;

let myIntro = "My name is " + myName + " My age is " + age;
console.log(myIntro);

// `` is use below
let myIntro1 = `My name is ${myName} My age is ${age}`;
console.log(myIntro1);
