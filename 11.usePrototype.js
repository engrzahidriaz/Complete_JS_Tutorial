// Use Prototype
// [[perototype]] or __proto__ --> it is reference
// prototype --> it is object
// NOTE: __proto__ lead to prototype

// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old` 
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     song : function(){
//         return 'ta na na na';
//     }
// }
// function createUser(firstName, lastName, email, age, address){
//     const user = Object.create(userMethods);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user
// }
// console.log(createUser.prototype);
// const user1 = createUser('zahid','Riaz','zahidriaz@gmail.com','32','my address');
// const user2 = createUser('shahid','Riaz','shahidriaz@gmail.com','36','my address');
// const user3 = createUser('fasih','zahid','fasihzahid@gmail.com','12','my address');


function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);  // Add prototype objects
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user
}

// NOTE: Instant of using seperate 'userMethods' object, create object with help of prototype property
// If we have free space of prototype, why we create seperate object for [[prototype]]

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old` 
};
createUser.prototype.is18 = function(){
    return this.age >= 18;
};
createUser.prototype.song = function(){
    return 'ta na na na';
};

const user1 = createUser('zahid','Riaz','zahidriaz@gmail.com','32','my address');
const user2 = createUser('shahid','Riaz','shahidriaz@gmail.com','36','my address');
const user3 = createUser('fasih','zahid','fasihzahid@gmail.com','12','my address');
console.log(user1);
console.log(user2.about());
console.log(user3.song());

