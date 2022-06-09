// To add more Methods in Object, ach time give reference
// no need to add reference of each function/method of other object (userMethod)
// Second solution using Object.create

// What is __proto__ , [[prototype]]


const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old` 
    },
    is18 : function(){
        return this.age >= 18;
    },
    song : function(){
        return 'ta na na na';
    }
}
function createUser(firstName, lastName, email, age, address){
    // using 'Object.create()' no need to add reference of each function/method of other object
    const user = Object.create(userMethods);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user
}
const user1 = createUser('zahid','Riaz','zahidriaz@gmail.com','32','my address');
const user2 = createUser('shahid','Riaz','shahidriaz@gmail.com','36','my address');
const user3 = createUser('fasih','zahid','fasihzahid@gmail.com','12','my address');

console.log(user2.about());
console.log(user3.song());



////// GAME behind above Story //////


// const obj1 = {
//     key1: 'value1',
//     key2: 'value2'
// }
// const obj2 = {
//     key3: 'value3',
// }
// console.log(obj1.key1);
// console.log(obj2.key3);
// console.log(obj2.key1);  // undefined, key1 is not in obj2


// const obj1 = {
//     key1: 'value1',
//     key2: 'value2'
// }
// const obj2 = {}       // create empty object, then put values
// obj2.key3 = 'value3';

// console.log(obj1.key1);
// console.log(obj2.key3);
// console.log(obj2.key1);  // undefined, key1 is not in obj2


const obj1 = {
    key1: 'value1',
    key2: 'value2'
}
// Another way to create empty object
const obj2 = Object.create(obj1);   // return empty object
// add value in obj2
obj2.key3 = 'value3';

console.log(obj1.key1);
console.log(obj2.key3);
console.log(obj2.key1);  // if key1 is not in obj2, then search in obj1

console.log(obj2);  // show [[Prototype]] in console, which is object
// NOTE: if somthing not found in your object, JS search in __proto__ object
// [[Prototype]]  === __proto__

console.log(obj2.__proto__); // show value of __proto__ object

// NOTE: prototype !== __proto__ or [[Prototype]]