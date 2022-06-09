// How to create Method
// Method --> function inside object

// 'this' is object who calls function

// const person = {
//     firstName: 'zahid',
//     age: 31,
//     about: function(){
//         // console.log('My name is zahid, 31 years old');
//         // console.log(`My name is ${firstName}, ${age} years old`);   // give error
//         // console.log(`My name is ${this.firstName}, ${this.age} years old`);
//         console.log(this.firstName, this.age)
//     }
// }
// // console.log(person.firstName);   
// // console.log(person.about);       // shoe whole function
// person.about();



const personInfo = function(){
    console.log(`My name is ${this.firstName}, ${this.age} years old`);
}

const person1 = {
    firstName: 'zahid',
    age: 31,
    about: personInfo
}
const person2 = {
    firstName: 'fasih',
    age: 11,
    about: personInfo
}
const person3 = {
    firstName: 'shahid',
    age: 36,
    about: personInfo
}
// personInfo();     // undefined. if directly call the function
person2.about();
person3.about();
