// Call, Apply, Bind Methods

// function hello(){
//     console.log('hello Word');
// }
// // hello();
// hello.call();

// Call Method

// const person1 = {
//     firstName: 'zahid',
//     age: 31,
//     about: function(){
//         console.log(`My name is ${this.firstName}, ${this.age} years old`);
//     }
// }
// const person2 = {
//     firstName: 'fasih',
//     age: 11,
// }
// person1.about();
// person1.about.call(person1);   // same as above
// person1.about.call(person2);   // call about function (which is in person1) from person2
// person1.about.call();          // undefined


// const person1 = {
//     firstName: 'zahid',
//     age: 31,
//     about: function(hobby, favSingar){   // function with arguments
//         console.log(`My name is ${this.firstName}, ${this.age} years old`);
//         console.log(hobby, favSingar)
//     }
// }
// const person2 = {
//     firstName: 'fasih',
//     age: 11,
// }
// person1.about.call(person2,'reading','atif');   

const about = function(hobby, favSingar){   
    console.log(`My name is ${this.firstName}, ${this.age} years old`);
    console.log(hobby, favSingar)
}
const person1 = {
    firstName: 'zahid',
    age: 31,
}
const person2 = {
    firstName: 'fasih',
    age: 11,
}
// about.call(person2,'reading','atif'); 
// about.call(person1,'reading','atif'); 

// Apply Method  --> use array for apply arguments
// about.apply(person1,['reading','atif']); 

// Bind Method  --> return a function
const func = about.bind(person2,'reading','atif'); 
func();
