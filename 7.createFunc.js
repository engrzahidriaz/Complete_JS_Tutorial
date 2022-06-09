// Create Function to Create Multiple Objects

// const user1 = {
//     firstName: 'zahid',
//     lastName: 'Riaz',
//     email: 'zahidriaz@gmail.com',
//     age: 31,
//     address: 'house Number 321',
//     about: function(){
//         return `${this.firstName} is ${this.age} years old` 
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }
// const aboutuser = user1.about();
// console.log(aboutuser);

// to create thousand of user object, make a function to create objects
// 1. create objects
// 2. add key:value pairs
// 3. return object


function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old` 
    };
    user.is18 = function(){
        return this.age >= 18;
    };
    return user
}
const user1 = createUser('zahid','Riaz','zahidriaz@gmail.com','32','my address');
console.log(user1);

// Call function/method of object user1
const is18func = user1.is18();
console.log(is18func);
const aboutFunc = user1.about();
console.log(aboutFunc);

